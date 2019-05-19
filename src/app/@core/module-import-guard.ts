export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
  if (parentModule) {
    throw new Error(`${moduleName} Ya se ha cargado. Se importaron los modulos de Core en AppModule.`);
  }
}
