--  GHDL Run Time (GRT) - mono-thread version.
--  Copyright (C) 2005 - 2014 Tristan Gingold
--
--  GHDL is free software; you can redistribute it and/or modify it under
--  the terms of the GNU General Public License as published by the Free
--  Software Foundation; either version 2, or (at your option) any later
--  version.
--
--  GHDL is distributed in the hope that it will be useful, but WITHOUT ANY
--  WARRANTY; without even the implied warranty of MERCHANTABILITY or
--  FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License
--  for more details.
--
--  You should have received a copy of the GNU General Public License
--  along with GCC; see the file COPYING.  If not, write to the Free
--  Software Foundation, 59 Temple Place - Suite 330, Boston, MA
--  02111-1307, USA.
--
--  As a special exception, if other files instantiate generics from this
--  unit, or you link this unit with other files to produce an executable,
--  this unit does not by itself cause the resulting executable to be
--  covered by the GNU General Public License. This exception does not
--  however invalidate any other reasons why the executable file might be
--  covered by the GNU Public License.

with Grt.Types; use Grt.Types;

package Grt.Wave_Options.Read is
   pragma Preelaborate;

   function Get_Top_Cursor (Name : Ghdl_C_String; Index : Tree_Index_Type)
                           return Elem_Acc;
   function Get_Cursor
     (Name : Ghdl_C_String; Parent : Elem_Acc; Is_Signal : Boolean := False)
     return Elem_Acc;
   function Is_Displayed (Cursor : Elem_Acc) return Boolean;

   procedure Check_If_All_Found;

private

   function Find_Cursor
     (Name : Ghdl_C_String; First : Elem_Acc; Is_Signal : Boolean := False)
     return Elem_Acc;

   procedure Check_If_Found
     (Previous_Cursor : Elem_Acc; Sep : Character; Level : Positive);

   function Display_All_Signals return Boolean;

end Grt.Wave_Options.Read;
