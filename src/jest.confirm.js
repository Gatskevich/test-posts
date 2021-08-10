module.exports = { 
    clearMocks: true, 
    // Массив расширений файлов, которые используют ваши модули 
    moduleFileExtensions: ['js', 'json', 'jsx'], extensionPathIgnorePatterns 
    : [ 
      '<rootDir> / dist /', 
      '<rootDir > / node_modules / ', 
      ' <rootDir> / docs / ', 
      ' <rootDir> / build / ' 
    ], 
    testPathIgnorePatterns: [ 
      ' <rootDir> / dist / ', 
      ' <rootDir> / node_modules / ', 
      ' <rootDir> / docs / ', 
      ' <rootDir> / build / ' 
    ] 
  };