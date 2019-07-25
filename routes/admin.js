var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
res.send('update_arc3d will update arc3d');
});


router.get('/update_arc3d', function(req, res, next) {
var callfile = require('child_process'); 
callfile.exec('sh /home/ubuntu/projects/TerriaMap/update.sh', (err, stdout, stderr) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
})


});

module.exports = router;
