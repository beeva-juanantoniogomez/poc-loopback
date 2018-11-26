# PoC Loopback 3

* [Slides](https://docs.google.com/presentation/d/1XpHplOGDTjvXEhItXBVCMv4AMJ_E3jbhWJvmMyRrh2Y/edit?usp=sharing)
* [Code](https://github.com/beeva-juanantoniogomez/poc-loopback)
* [Full document](https://docs.google.com/document/d/14zi5AztQkbuEvbRkJ64lGP8XqFQUeeS2z-uDMnwOf4g/edit?usp=sharing)

*Authors:* [Juan Antonio Gómez](https://github.com/beeva-juanantoniogomez)

*Date:* 2018/11/30

## Online demo

You can find a deployed demo in [http://beevaffinity-loopback.herokuapp.com/](http://beevaffinity-loopback.herokuapp.com/).

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) >=8, and `npm`

## Installation

* `git clone https://github.com/beeva-juanantoniogomez/poc-loopback.git`
* `cd poc-loopback`
* `npm install`
* Edit your [datastore config](server/datasources.development.js).

## Running / Development

* `node .`
* Open [http://localhost:3000](http://localhost:3000) in your browser.

For debugging, we recommend [ndb](https://github.com/GoogleChromeLabs/ndb).

### Running Tests

* TBW

### Request

* You can use the Swagger at [http://localhost:3000/explorer](http://localhost:3000/explorer).

## Further Reading / Useful Links

* [Loopback.io](https://loopback.io/)
