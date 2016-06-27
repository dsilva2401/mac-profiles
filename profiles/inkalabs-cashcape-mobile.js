// Libs
var open = require('open');


// Open tickets panel
open('https://redmine.fincite.net/projects/cashcape-internal/agile/board?utf8=%E2%9C%93&set_filter=1&f%5B%5D=status_id&op%5Bstatus_id%5D=o&f%5B%5D=assigned_to_id&op%5Bassigned_to_id%5D=%3D&v%5Bassigned_to_id%5D%5B%5D=me&f%5B%5D=&c%5B%5D=tracker&c%5B%5D=assigned_to');

// Open terminal
open('/Users/dsilva/ds/jobs/inkalabs/cashcape/mobile', 'iTerm');

// Open sublime
open('/Users/dsilva/ds/jobs/inkalabs/cashcape/mobile', 'Sublime Text');

// Open hipchat
open(null, 'HipChat');