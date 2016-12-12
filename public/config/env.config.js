var protocal = window.location.protocol;

var testApiHost= protocal + '//localhost:4000'

module.exports = {
	// api: 'http://localhost:9016/',
    // api:"http://192.168.192.206:9016/",
    api: testApiHost,
    //api:"http://192.168.198.182:9004",
    //auth:"http://192.168.192.183:10070",
    //auth:"http://192.168.198.182:9001",
    test:false
};