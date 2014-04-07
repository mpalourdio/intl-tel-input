module.exports = function(grunt) {
  return {
    options: {
      banner: '/*\n'+
        'International Telephone Input v<%= package.version %>\n'+
        '<%= package.repository.url %>\n'+
        '*/\n'
    },
    dev: {
      options: {
        beautify: true,
        compress: false,
        mangle: false,
        preserveComments: true
      },
      files: {
        'build/js/intlTelInput.js': 'tmp/all.js'
      }
    },
    prod: {
      files: {
        'build/js/intlTelInput.min.js': 'tmp/all.js'
      }
    }
  };
};