module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
   jshint: {
      files: ['Gruntfile.js', 'assets/js/*.js'],
      options: {
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    watch: {
      files: ['assets/**/*', '<%= jshint.files %>', 'index.html'],
      tasks: ['cssmin', 'jshint']
    },
    connect: {
      server: {
        options: {
          livereload: true,
          base: './',
          appName: '8000'
        }
      }
    },
    cssmin: {
      combine: {
        files: {
          'assets/css/style.min.css': ['assets/css/*.css', '!assets/css/style.min.css']
        }
      }
    },
    nodewebkit: {
      options: {
        platforms: ['osx', 'win'],
        buildDir: './builds',
      },
      src: ['package.json', 'index.html', './assets/*', './assets/**', '!node_modules/']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-node-webkit-builder');

  grunt.registerTask('serve', ['connect:server', 'watch', 'cssmin']);
  grunt.registerTask('build', ['cssmin', 'nodewebkit']);
};
