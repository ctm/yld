# My First Hack

A friend of mine mentioned the PDP-8 earlier today and I bombarded him with
the following story.

> We had a PDP-8 in high school. It had core memory, so they turned it off at night (core retains its memory without power). We ran BASIC on that machine and it had an address that you could "soft-restart" it. That address was 0200 (octal, of course). So, in the morning, the person starting the computer would make sure the toggles had that one bit set, then you'd flick the "load program counter" toggle on the front end, then hit start.
>
> Part of the memory was reserved and not used by BASIC. I think it was reserved for the boot-loader, but I could be mistaken. Either way, I knew that I could toggle in a very small program in that space, run it and then soft-restart back into BASIC, so I wrote a tiny loop that ran through all of memory and changed the CLR (clear the accumulator) instructions into ?LSR? (load the switch register into the accumulator). I then loaded 0200 into the switch register, toggled the load program counter, then switched the 0200 toggle back down so the switch register was now 0000, then I hit start.
>
> Surprisingly to me, BASIC ran fine as far as I could tell. That told me there were no occurrences of the 12-bit value for CLR that were important data. So,each time the LSR was hit, it loaded 0 (because that's what the toggle switches were left at by me) into the accumulator, just like a CLR would have.  Wow!
>
> The next day, however, someone did the "normal" soft restart and left the 0200 bit up after loading it into the switch register. BASIC did not run well,but surprisingly it was able to print out a garbled error message on the ASR-33 that was connected to the computer. The teacher mentioned this to the class and I asked if I could take a look. I then did my modified soft-reset (where after loading 0200 into the program counter I pushed the 0200 bit back down again) and sure enough, BASIC worked again.
>
> We went through that game a couple days in a row and then the teacher told me she was going to call DEC in to look at our machine. I was scared, but I fessed up because I didn't want the school to have to pay for field service when there was nothing wrong. I told the teacher what I had done and she didn't believe me. She didn't think what I described would do what we saw. To some extent I understand her disbelief, because had I not tried it myself, I too would doubt that it would work (because I would assume that things would break so badly that the ASR-33 wouldn't be able to print anything!).

For the record, although I consider this a hack, I did not do it to be
malicious or even out of vanity (although I'm documenting it here out
of vanity). I did it because I was curious as to what would happen and
I knew I could reload BASIC to restore things.

It's been too long for me to remember all of the details. I _think_
the reason the machine was started at 0200 in the morning is that it
had the side-effect of clearing out the programs that may have been
left in core from previous users.  OTOH, it may have been that the
program counter itself got forgotten when power was turned off.
