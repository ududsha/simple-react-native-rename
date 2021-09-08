// nS - No Space
// lC - Lowercase

export function filesToModifyContent(currentAppName, newName) {
  const nS_NewName = newName.replace(/\s/g, '');

  return [
    {
      regex: `<string name="app_name">${currentAppName}</string>`,
      replacement: `<string name="app_name">${newName}</string>`,
      paths: ['android/app/src/main/res/values/strings.xml'],
    },
    {
      regex: currentAppName,
      replacement: newName,
      paths: [`ios/${nS_NewName}/Info.plist`],
    },
  ];
}
