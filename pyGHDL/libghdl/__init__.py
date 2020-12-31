import ctypes
import os
import sys
from pathlib import Path
from shutil import which
from typing import Tuple

from pyGHDL.libghdl.version import __version__


def _to_char_p(arg: bytes) -> Tuple[ctypes.c_char_p, int]:
    return ctypes.c_char_p(arg), len(arg)


def _get_libghdl_name() -> Path:
    """Get the name of the libghdl library (with version and extension)"""
    ver = __version__.replace("-", "_").replace(".", "_")
    ext = {"win32": "dll", "cygwin": "dll", "darwin": "dylib"}.get(sys.platform, "so")
    return Path("libghdl-{version}.{ext}".format(version=ver, ext=ext))


def _check_libghdl_libdir(libdir: Path, basename: Path) -> Path:
    """Returns libghdl path in :param:`libdir`, if found."""
    if libdir is None:
        raise ValueError("Parameter 'libdir' is None.")
    # print('libghdl: check in {}'.format(libdir))
    res = libdir / basename
    if res.exists():
        return res

    raise FileNotFoundError(str(res))


def _check_libghdl_bindir(bindir: Path, basename: Path) -> Path:
    if bindir is None:
        raise ValueError("Parameter 'bindir' is None.")

    return _check_libghdl_libdir((bindir / "../lib").resolve(), basename)


def _get_libghdl_path():
    """Locate the directory where the shared library is"""
    basename = _get_libghdl_name()

    # Try GHDL_PREFIX
    # GHDL_PREFIX is the prefix of the vhdl libraries, so remove the
    # last path component.
    r = os.environ.get("GHDL_PREFIX")
    try:
        return _check_libghdl_libdir(Path(r).parent, basename)
    except (TypeError, FileNotFoundError):
        pass

    # Try VUNIT_GHDL_PATH (path of the ghdl binary when using VUnit).
    r = os.environ.get("VUNIT_GHDL_PATH")
    try:
      return _check_libghdl_bindir(Path(r), basename)
    except (TypeError, FileNotFoundError):
        pass

    # Try GHDL (name/path of the ghdl binary)
    r = os.environ.get("GHDL", "ghdl")
    r = which(r)
    try:
        return _check_libghdl_bindir(Path(r).parent, basename)
    except (TypeError, FileNotFoundError):
        pass

    # Try within libghdl/ python installation
    r = Path(__file__)
    try:
        return _check_libghdl_bindir(r.parent, basename)
    except (TypeError, FileNotFoundError):
        pass

    # Try when running from the build directory
    r = (r.parent / "../../lib").resolve()
    try:
        return _check_libghdl_libdir(r, basename)
    except (TypeError, FileNotFoundError):
        pass

    # Failed.
    raise Exception("Cannot find libghdl {}".format(basename))


# Load the shared library
_libghdl_path = _get_libghdl_path()
# print("Load {}".format(_libghdl_path))
libghdl = ctypes.CDLL(str(_libghdl_path))

# Initialize it.
# First Ada elaboration (must be the first call)
libghdl.libghdl_init()
# Then 'normal' initialization (set hooks)
libghdl.libghdl__set_hooks_for_analysis()

# Set the prefix in order to locate the VHDL libraries.
libghdl.libghdl__set_exec_prefix(
    *_to_char_p(str(_libghdl_path.parent.parent).encode("utf-8"))
)

def finalize() -> None:
    """Free all the memory, be ready for a new initialization."""
    libghdl.options__finalize()


def initialize() -> None:
    """Initialize or re-initialize the shared library."""
    libghdl.options__initialize()


def set_option(opt: bytes) -> bool:
    """Set option :param:`opt`. Return true, if the option is known and handled."""
    return libghdl.libghdl__set_option(*_to_char_p(opt)) == 0


def analyze_init() -> None:
    """
    Initialize the analyzer.

    .. deprecated:: 1.0.0
       Deprecated as it may raise an exception. Use :func:`analyze_init_status`.
    """
    libghdl.libghdl__analyze_init()

def analyze_init_status() -> int:
    """Initialize the analyzer. Returns 0 in case of success."""
    return libghdl.libghdl__analyze_init_status()

def analyze_file(fname: bytes):
    """"Analyze a given filename :param:`fname`."""
    return libghdl.libghdl__analyze_file(*_to_char_p(fname))


def disp_config():
    """"Display the configured prefixes for libghdl."""
    return libghdl.ghdllocal__disp_config_prefixes()
