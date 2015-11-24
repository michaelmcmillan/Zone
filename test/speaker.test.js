var assert = require('assert');
var Speaker = require('../src/speaker.js');

describe('Speaker', function () {

    describe('volume', function () {
        
        it('can not go over 100', function () {
            var speaker = new Speaker(); 
            speaker.volume = 101
            assert.equal(speaker.volume, 100);
        });

        it('can not go under 0', function () {
            var speaker = new Speaker(); 
            speaker.volume = -1 
            assert.equal(speaker.volume, 0);
        });

    });

    describe('model', function () {

        it('raises exception if name is "Play X"', function () {
            var speaker = new Speaker();
            assert.throws(function () {
                speaker.model = 'Play X';
            }, /model/);
        });

        it('does not raise exception if name is "Play 5"', function () {
            var speaker = new Speaker();
            speaker.model = 'Play 5';
            assert.equal(speaker.model, 'Play 5');
        });

    });

    describe('stream', function () {
        
        it('raises exception if given an invalid URL', function () {
            var speaker = new Speaker();
            assert.throws(function () {
                speaker.stream('htp://soundcloud.com/invalid-url/song.mp3');
            }, /URL/);
        });
    });

});
