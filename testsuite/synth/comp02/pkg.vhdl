library ieee;
use ieee.std_logic_1164.all;

package pkg is
  component cmask is
    generic
      (mask : std_logic_vector (0 to 7));
    port (d : std_logic_vector (7 downto 0);
          o : out std_logic_vector (7 downto 0));
  end component;
end pkg;
