entity tc13 is
end;

library ieee;
use ieee.std_logic_1164.all;

architecture behav of tc13 is
  signal clk : std_logic;
  signal tg : std_logic;
begin
  process (clk) is
  begin
    if ?? tg and falling_edge(clk) then
      null;
    end if;
  end process;
end behav;
