# PDP-8

I went to Oyster River High School in Durham New Hampshire. At the
time, ORHS had a
[PDP-8/e](http://bitsavers.trailing-edge.com/pdf/dec/pdp8/software/DEC-08-NGCC-D_PaperTapeSW.pdf).
It was one of the first computers I got to program.  I had tried to
build a [COSMAC
Elf](http://exemark.com/Microcontrollers/PopularElecwebc.pdf) in
eighth grade, but I suck at electronics and I was living in Spain.  I
never finished it in part because when I returned to the U.S. I had
access to ORHS's PDP-8 and the University of New Hampshire's [DEC-10](https://en.wikipedia.org//wiki/PDP-10).

The PDP-8 at the high school had core memory but no storage.  It was
connected to two
[ASR-33](https://en.wikipedia.org/wiki/Teletype_Model_33) terminals,
which had integrated paper-tape punchdrs and readers.  These terminals
were 110 baud, i.e. *amazingly slow*, which made it inconvenient to run
software other than BASIC, since the software was loaded via the slow
paper-tape reader.

BASIC could support both terminals, but without an operating system,
the other software ORHS had would only run on one terminal.  I was allowed
to stay after school and run the other software, but it took a lot of time,
because I would have to load it from paper tape, do whatever I wanted with
that software and then reload BASIC before leaving.

Luckily, I taught myself enough PDP-8 machine language and assembly
that I was able to later get a job programming in PDP-8 assembler at a
local company.  So, although my high school was my introduction to the
PDP-8, the "serious" (right!) PDP-8 work I did was on a machine that
ran an actual operating system (Nope! Not OS/8, but ETOS, which
required a [special
board](https://www.bernhard-baehr.de/pdp8e/TSC8-75_doc.html)).  Just
don't try to read cards while the DECtape is spinning.
