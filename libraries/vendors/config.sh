#! /bin/bash
# EMACS settings: -*-	tab-width: 2; indent-tabs-mode: t -*-
# vim: tabstop=2:shiftwidth=2:noexpandtab
# kate: tab-width 2; replace-tabs off; indent-width 2;
# 
# ==============================================================================
#	Authors:						Patrick Lehmann
# 
#	Bash Script:				Configurable directories to local installed tools
# 
# Description:
# ------------------------------------
#	This Bash file exports variables containing the users local tool environment.
#
# ==============================================================================
#	Copyright (C) 2015-2016 Patrick Lehmann
#	
#	GHDL is free software; you can redistribute it and/or modify it under
#	the terms of the GNU General Public License as published by the Free
#	Software Foundation; either version 2, or (at your option) any later
#	version.
#	
#	GHDL is distributed in the hope that it will be useful, but WITHOUT ANY
#	WARRANTY; without even the implied warranty of MERCHANTABILITY or
#	FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License
#	for more details.
#	
#	You should have received a copy of the GNU General Public License
#	along with GHDL; see the file COPYING.  If not, write to the Free
#	Software Foundation, 59 Temple Place - Suite 330, Boston, MA
#	02111-1307, USA.
# ==============================================================================


# Configure
# - vendor tool chain installation paths or
# - library root directories
# in the following dictionary.
# 
# These values are used if no command line argument (--src) is passed to a
# compile script. Empty strings means not configured.
declare -A InstallationDirectory
InstallationDirectory[AlteraQuartus]="/opt/Altera/15.1"
InstallationDirectory[XilinxISE]="/opt/Xilinx/14.7"
InstallationDirectory[XilinxVivado]="/opt/Xilinx/Vivado/2016.1"
InstallationDirectory[LatticeDiamond]="/usr/local/diamond/3.7_x64"
InstallationDirectory[OSVVM]="/home/paebbels/git/PoC/lib/osvvm"
InstallationDirectory[VUnit]="/home/paebbels/git/PoC/lib/vunit"

# Configure preferred output directories for each library set:
declare -A DestinationDirectory
DestinationDirectory[AlteraQuartus]="altera"
DestinationDirectory[XilinxISE]="xilinx-ise"
DestinationDirectory[XilinxVivado]="xilinx-vivado"
DestinationDirectory[LatticeDiamond]="lattice"
DestinationDirectory[OSVVM]="osvvm"
DestinationDirectory[VUnit]="vuint"

# Declare source directories depending on the installation paths:
declare -A SourceDirectory
SourceDirectory[AlteraQuartus]="${InstallationDirectory[AlteraQuartus]}/quartus/eda/sim_lib"
SourceDirectory[XilinxISE]="${InstallationDirectory[XilinxISE]}/ISE_DS/ISE/vhdl/src"
SourceDirectory[XilinxVivado]="${InstallationDirectory[XilinxVivado]}/data/vhdl/src"
SourceDirectory[LatticeDiamond]="${InstallationDirectory[LatticeDiamond]}/cae_library/simulation/vhdl"
SourceDirectory[OSVVM]="${InstallationDirectory[OSVVM]}"
SourceDirectory[VUnit]="${InstallationDirectory[VUnit]}/vunit/vhdl"

# input files greater than $LARGE_FILESIZE are skipped if '--skip-largefiles' is set
LARGE_FILESIZE=125000

