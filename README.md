matrix-inverse-js
=================

Matrix inverse function packaged for CommonJS. Code is from [sylvester][]
by [James Coglan][], with gratitude.


Installation
------------

Install matrix-inverse-js by running:

    npm install matrix-inverse


Example
-------

    var matrixInverse = require('./matrix-inverse');

    var M = [
        [3, 3.2],
        [3.5, 3.6],
    ];

    var M_inv = matrixInverse(M);


Origin
------

This code was copied and adapted from sylvester at commit
5a2c61681e988d60bf0a4223640c636052946341.


Contribute
----------

- Issue Tracker: github.com/bodylabs/matrix-inverse-js/issues
- Source Code: github.com/bodylabs/matrix-inverse-js


License
-------

The project is licensed under the MIT license.


[sylvester]: https://github.com/jcoglan/sylvester
[James Coglan]: http://jcoglan.com/
