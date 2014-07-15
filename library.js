(function(module) {
    "use strict";
    var MP3 = {},
        embedmp3 = '<audio src="http://$1.mp3" preload="auto" />',
        embedogg = '<audio src="http://$2.ogg" preload="auto" />'

    MP3.parse = function(postContent, callback) {
        var	embedmp3 = /<a href="(?:http|https?:\/\/)?(.+)\.mp3">.+<\/a>/g;
        var	embedogg = /<a href="(?:http|https?:\/\/)?(.+)\.ogg">.+<\/a>/g;

        if (postContent.match(embedmp3)) {
            postContent = postContent.replace(embedmp3, embed);
        }
        if (postContent.match(embedogg)) {
            postContent = postContent.replace(embedogg, embeds);
        }

        callback(null, postContent);
    };

    module.exports = MP3;
}(module));