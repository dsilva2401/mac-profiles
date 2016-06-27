// Libs
var open = require('open');


// Open tickets panel
open('https://redmine.fincite.net/projects/hypovereinsbank-home/issues?utf8=%E2%9C%93&set_filter=1&f%5B%5D=status_id&op%5Bstatus_id%5D=o&f%5B%5D=assigned_to_id&op%5Bassigned_to_id%5D=%3D&v%5Bassigned_to_id%5D%5B%5D=me&f%5B%5D=&c%5B%5D=tracker&c%5B%5D=status&c%5B%5D=priority&c%5B%5D=subject&c%5B%5D=assigned_to&c%5B%5D=updated_on&c%5B%5D=done_ratio&group_by=');

// Open terminal
open('/Users/dsilva/ds/jobs/inkalabs/hypovereinsbank/server', 'iTerm');

// Open sublime
open('/Users/dsilva/ds/jobs/inkalabs/hypovereinsbank/server/app', 'Sublime Text');

// Open hipchat
open(null, 'HipChat');