---
title: Block ads at home and on the go with Pi-hole and Tailscale
description: Create a private mesh network with Tailscale to use your Pi-hole everywhere
date: 2023-01-02
---

I have recently begun using a [Pi-hole](https://pi-hole.net/). This nifty software is easily installed on a Raspberry Pi and once correctly configured in your router will block advertisements on a DNS level. This is much better than an adblocker, as the ads are not even loaded. A Pi-hole is also not detectable by websites. The only downside of course is that this only works at home. Enter [Tailscale](https://tailscale.com/), which enables you to create a private mesh network between your devices, with ability to use the same Pi-hole as a DNS server everywhere.

## Set up Pi-hole
The [Pi-hole](https://pi-hole.net/) website has instructions on how to install it, which basically boils down to running

```sh
curl -sSL https://install.pi-hole.net | bash
```

They have [different options](https://github.com/pi-hole/pi-hole/#alternative-install-methods) for running from source if piping to bash is not your cup of tea.

I found that the installation very straightforward and spent the most time figuring out which of the various DNS options to change in my router.

## Set up a Tailscale network
Tailscale is free for personal use. First you need to create an account on [their website](https://tailscale.com/).

The Tailscale documentation is excellent and they have a [great article](https://tailscale.com/kb/1114/pi-hole/) on how to set up a Pi-hole with Tailscale. Instead of basically copying what is written there (although at the slight risk the link will rot in the future), I recommend you to follow that guide.

## Bonus: Own VPN that routes network over the Raspberry Pi
As a final optional step, I set up the ability to use the Raspberry Pi as an [exit node](https://tailscale.com/kb/1103/exit-nodes/), which routes all traffic through my home, basically providing me with my own VPN. Follow the Linux instructions in the Tailscale documentation for this, but remember that since we set up the Raspberry Pi as a DNS server, the `--accept-dns=false` flag needs to be added when running `tailscale up` again:

```sh
sudo tailscale up --advertise-exit-node --accept-dns=false
```

What I really like about the exit node feature is that it's easy to toggle it on or off. This means that by default when I start Tailscale on one of my devices I get the benefits of the Pi-hole and can then optionally also route all the traffic to my home.

## In conclusion
I'm very impressed by the ease of usage of both Pi-hole and Tailscale. You could easily set all of this up in under an hour, so that's a quick win for a better internet!
