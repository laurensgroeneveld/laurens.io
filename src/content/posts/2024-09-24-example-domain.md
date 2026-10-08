---
title: Use a proper example domain
description: Don't use @notarealemail.com for fake test email addresses
date: 2024-09-24
---
Quite often I need to put in a fake or test email address in a system. Either a local or staging environment where I load some test users or orders, or (as has unfortunately happened) some production environment where email is mandatory, but none is associated with the entity.

The mistake I used to make and which I see a lot of people still make is put in something that looks fake, like `@notarealemail.com`. The problem is that domains like these are quite often [registered](https://www.whois.com/whois/notarealemail.com) by someone. This is a potential privacy and security problem, as any emails that are sent to this supposedly fake email address can be intercepted by the owner of the domain. Even for local environments emails could contains sensitive information that shouldn't end up in someone else's hands.

## The solution
Instead of coming up with a "random" domain name, the solution is to use the [IANA example domains](https://www.iana.org/help/example-domains) `example.com`, `example.org` or `example.net`. Any email sent to these domains will be automatically discarded, making them safe to use for test purposes. As a bonus point, these domains can also be used as test links instead of the ubiquitously used `google.com`, as not everyone might be happy to get routed to their hungry data machine...
