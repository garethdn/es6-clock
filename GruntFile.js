module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true,
        modules: 'amd'
      },

      build: {
        files: [{
          expand: true,
          cwd: 'app/',
          src: ['**/*.js'],
          dest: 'dist/',
        }],
      }
    },

    watch: {
      scripts: {
        files: ['app/**/*.js'],
        tasks: ['babel']
      }
    }

  });

  grunt.registerTask("default", ["babel", "watch"]);
};