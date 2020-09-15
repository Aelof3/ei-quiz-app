export let questionlist = [
  // I honestly thought about using the key pair encryption in the crypto.subtle library, but already had this in place and working
    {
      question: 'What is a Quaternion?',
      answers: [
        'A special brand of Quaker Oats',
        'A unit of measurement for measuring distance in one direction',
        'A Vector4 object with x, y, z, and w properties used for 3D object rotation in space',
        'A mathematical equation for determining the rotation of an object in 3D space'
      ],
      correctAnswer: '35 31 20 35 33 20 34 32 20 35 37 20 35 61 20 35 37 20 34 65 20 33 30 20 36 32 20 33 33 20 34 39 20 33 30 20 34 39 20 34 37 20 33 39 20 36 39 20 36 31 20 36 64 20 35 36 20 36 61 20 36 34 20 34 33 20 34 32 20 33 33 20 36 31 20 35 38 20 35 32 20 36 66 20 34 39 20 34 38 20 36 37 20 37 33 20 34 39 20 34 38 20 36 62 20 37 33 20 34 39 20 34 38 20 36 66 20 37 33 20 34 39 20 34 37 20 34 36 20 37 35 20 35 61 20 34 33 20 34 32 20 33 33 20 34 39 20 34 38 20 34 32 20 37 39 20 36 32 20 33 33 20 34 32 20 36 63 20 36 33 20 36 65 20 35 32 20 37 30 20 35 61 20 35 38 20 34 64 20 36 37 20 36 34 20 35 38 20 34 65 20 36 63 20 35 61 20 34 33 20 34 32 20 36 64 20 36 32 20 33 33 20 34 39 20 36 37 20 34 64 20 33 30 20 35 31 20 36 37 20 36 32 20 33 32 20 34 61 20 37 31 20 35 61 20 35 37 20 34 65 20 33 30 20 34 39 20 34 38 20 34 61 20 37 36 20 36 34 20 34 37 20 34 36 20 33 30 20 36 31 20 35 37 20 33 39 20 37 35 20 34 39 20 34 37 20 36 63 20 37 35 20 34 39 20 34 38 20 34 65 20 37 37 20 35 39 20 35 37 20 34 65 20 36 63'
    },
    {
      question: 'What is the standard render loop repeater function?',
      answers: [
          'setTimeout',
          'setInterval',
          'requestAnimationFrame',
          'render'
      ],
      correctAnswer: '36 33 20 36 64 20 35 36 20 37 38 20 36 34 20 35 37 20 35 36 20 37 61 20 36 34 20 34 35 20 34 36 20 37 35 20 36 31 20 35 37 20 33 31 20 36 38 20 36 34 20 34 37 20 36 63 20 37 36 20 36 32 20 36 62 20 35 61 20 37 39 20 35 39 20 35 37 20 33 31 20 36 63'
    },
    {
      question: 'Which of the following are a pair of 3D WebGL javascript libraries?',
      answers: [
          'cannon.js and ammo.js',
          'three.js and cannon.js',
          'three.js and babylon.js',
          'babylon.js and ammo.js'
      ],
      correctAnswer: '36 34 20 34 37 20 36 38 20 37 39 20 35 61 20 35 37 20 35 35 20 37 35 20 36 31 20 36 65 20 34 64 20 36 37 20 35 39 20 35 37 20 33 35 20 36 62 20 34 39 20 34 37 20 34 61 20 36 38 20 35 39 20 36 65 20 36 63 20 37 33 20 36 32 20 33 32 20 33 34 20 37 35 20 36 31 20 36 65 20 34 64 20 33 64'
    },
    {
      question: 'Which type of camera is best suited for viewing 2D scenes and UI elements?',
      answers: [
          'Orthographic',
          'Stereo',
          'Perspective',
          'Array'
      ],
      correctAnswer: '35 34 20 33 33 20 34 61 20 33 30 20 36 31 20 34 37 20 33 39 20 36 65 20 36 33 20 36 64 20 34 36 20 37 37 20 36 31 20 34 37 20 36 63 20 36 61'
    },
    {
      question: 'What HTML element utilizes the WebGL functionality?',
      answers: [
          'iframe',
          'canvas',
          'media',
          'video'
      ],
      correctAnswer: '35 39 20 33 32 20 34 36 20 37 35 20 36 34 20 36 64 20 34 36 20 37 61'
    },
    {
      question: 'What is the name for parameters supplied to a WebGL shader?',
      answers: [
          'Uniforms',
          'Vectors',
          'Faces',
          'Facets'
      ],
      correctAnswer: '35 36 20 35 37 20 33 35 20 37 30 20 35 61 20 36 64 20 33 39 20 37 39 20 36 32 20 35 38 20 34 64 20 33 64'
    },
    {
      question: 'Which of the following is an alternative method of rendering 3D content in your browser?',
      answers: [
          'CSS 3D',
          'Web Assembly Modules',
          'jQuery UI',
          'Asking Nicely'
      ],
      correctAnswer: '35 31 20 33 31 20 34 65 20 35 34 20 34 39 20 34 34 20 34 65 20 34 35'
    },
    {
      question: 'What is the correct term to describe a 3D texture generated from a 2D image?',
      answers: [
          'Skinned Mesh',
          'Height Map',
          'Interpolant',
          'Ray Casting'
      ],
      correctAnswer: '35 33 20 34 37 20 35 36 20 37 30 20 35 61 20 33 32 20 36 38 20 33 30 20 34 39 20 34 35 20 33 31 20 36 38 20 36 33 20 34 31 20 33 64 20 33 64'
    },
    {
      question: 'What term is defined as the method of finding the area under a curve?',
      answers: [
          'Calculus',
          'Trigonometry',
          'Radians',
          'Bezier Arithmetic'
      ],
      correctAnswer: '35 31 20 33 32 20 34 36 20 37 33 20 35 39 20 33 33 20 35 36 20 37 33 20 36 34 20 35 38 20 34 64 20 33 64'
    },
    {
      question: 'What is the maximum amount of sides a non-concave 2D polygon can have and still create all the faces of a complete 3D object?',
      answers: [
          '1',
          '3',
          '5',
          '7'
      ],
      correctAnswer: '34 65 20 35 31 20 33 64 20 33 64'
    },
    {
      question: 'In this order, what is the force of rotation on an object, and the force in a single direction on an object?',
      answers: [
          'Vector, Quaternion',
          'Vector, Impulse',
          'Torque, Vector',
          'Torque, Velocity'
      ],
      correctAnswer: '35 36 20 34 37 20 33 39 20 37 39 20 36 33 20 35 38 20 35 36 20 36 63 20 34 63 20 34 33 20 34 32 20 35 37 20 35 61 20 35 37 20 37 38 20 37 36 20 35 39 20 33 32 20 36 63 20 33 30 20 36 35 20 35 31 20 33 64 20 33 64'
    },
    {
      question: 'What is the term for force applied to an object over a short period of time?',
      answers: [
          'Burst',
          'Impulse',
          'Velocity',
          'Gravity'
      ],
      correctAnswer: '35 33 20 35 37 20 33 31 20 37 37 20 36 34 20 35 37 20 37 38 20 37 61 20 35 61 20 35 31 20 33 64 20 33 64'
    },
    {
      question: 'What are the two types of shaders in WebGL?',
      answers: [
          'Vertex and Fragment',
          'Face and Position',
          'Relative and Absolute',
          'Good and Bad'
      ],
      correctAnswer: '35 36 20 36 64 20 35 36 20 37 39 20 36 34 20 34 37 20 35 36 20 33 34 20 34 39 20 34 37 20 34 36 20 37 35 20 35 61 20 34 33 20 34 32 20 34 37 20 36 33 20 36 64 20 34 36 20 36 65 20 36 32 20 35 37 20 35 36 20 37 35 20 36 34 20 34 31 20 33 64 20 33 64'
    },
    {
      question: 'What is the name of a polyhedron with 20 faces?',
      answers: [
          'Torus Knot',
          'Icosahedron',
          'Dodecahedron',
          'Octahedron'
      ],
      correctAnswer: '35 33 20 35 37 20 34 65 20 37 36 20 36 33 20 33 32 20 34 36 20 36 66 20 35 61 20 35 37 20 35 32 20 37 39 20 36 32 20 33 32 20 33 34 20 33 64'
    },
    {
      question: 'Which of the following emits light in all directions from a set of coordinates?',
      answers: [
          'Point Light',
          'Ambient Light',
          'Hemisphere Light',
          'Sprite Image'
      ],
      correctAnswer: '35 35 20 34 37 20 33 39 20 37 30 20 36 32 20 36 65 20 35 31 20 36 37 20 35 34 20 34 37 20 36 63 20 36 65 20 36 31 20 34 38 20 35 31 20 33 64'
    },
    {
      question: 'What is it called when just the lines between faces of a 3D object are rendered?',
      answers: [
          'Wire Frame',
          'Skinned Mesh',
          'Skeleton',
          'Linear Interpolant'
      ],
      correctAnswer: '35 36 20 33 32 20 36 63 20 37 39 20 35 61 20 35 33 20 34 32 20 34 37 20 36 33 20 36 64 20 34 36 20 37 34 20 35 61 20 35 31 20 33 64 20 33 64'
    },
    {
      question: 'Which of the following describes the rotational transform of an object in 3D space?',
      answers: [
          'Euler angle',
          'Interpolant',
          'Spherical',
          'Torus Knot'
      ],
      correctAnswer: '35 32 20 35 38 20 35 36 20 37 33 20 35 61 20 35 38 20 34 39 20 36 37 20 35 39 20 35 37 20 33 35 20 36 65 20 36 32 20 34 37 20 35 35 20 33 64'
    },

];