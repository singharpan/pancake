| keyword | scope       | Reassign    | Redeclare  |  TDZ (temporal dead zone)
| :---:   | :---:       | :---:       | :---:      |  :---:
| var     | function    | yes         | yes        |   no
| let     | block       | yes         | no         |   yes
| const   | block       | no          | no         |   yes