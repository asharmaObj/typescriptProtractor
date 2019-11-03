// Because this file imports from  protractor, you'll need to have it as a
// project dependency. Please see the reference config: lib/config.ts for more
// information.
//
// Why you might want to create your config with typescript:
// Editors like Microsoft Visual Studio Code will have autocomplete and
// description hints.
//
// To run this example, run `protractor conf.js`.
exports.config = {
    framework: 'jasmine',
    capabilities: {
        browserName: 'firefox'
    },
    suites: {
        full: ['specs/spec.js', 'specs/specPageObjects.js'],
        smoke: ['specs/specPageObjects.js']
    },
    directConnect: true,
    // You could set no globals to true to avoid jQuery '$' and protractor '$'
    // collisions on the global namespace.
    noGlobals: true
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEVBQTBFO0FBQzFFLDhFQUE4RTtBQUM5RSxlQUFlO0FBQ2YsRUFBRTtBQUNGLDREQUE0RDtBQUM1RCx1RUFBdUU7QUFDdkUscUJBQXFCO0FBQ3JCLEVBQUU7QUFDRixpREFBaUQ7QUFDakQsT0FBTyxDQUFDLE1BQU0sR0FBRztJQUNmLFNBQVMsRUFBRSxTQUFTO0lBQ3BCLFlBQVksRUFBRTtRQUNaLFdBQVcsRUFBRSxTQUFTO0tBQ3ZCO0lBQ0QsTUFBTSxFQUFDO1FBQ0wsSUFBSSxFQUFDLENBQUMsZUFBZSxFQUFDLDBCQUEwQixDQUFDO1FBQ2pELEtBQUssRUFBQyxDQUFDLDBCQUEwQixDQUFDO0tBQ25DO0lBQ0QsYUFBYSxFQUFFLElBQUk7SUFFbkIsMEVBQTBFO0lBQzFFLHNDQUFzQztJQUN0QyxTQUFTLEVBQUUsSUFBSTtDQUNoQixDQUFDIn0=