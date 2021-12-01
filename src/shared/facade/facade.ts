export function ParameterRegistrable(target: any) {
  const original = target;
  const constructorFunc: any = function (...args: any[]) {
    for (let i = 0; i <= args.length; i++) {
      const arg = args[i];
      if (arg == undefined) continue;
      KeyTypeRegistry.put(target, arg.constructor, i);
    }
    return new original(...args);
  };
  constructorFunc.prototype = original.prototype;
  constructorFunc.prototype.baseType = target;
  return constructorFunc;
}

export function Facade(type: any) {
  return function (target: any, key: string | symbol) {
    target.constructor.prototype[key] = function (...args: any[]) {
      const ownProps = Object.getOwnPropertyNames(this);
      const baseType = type.prototype.baseType;
      const parameterTypes = Reflect.getMetadata('design:paramtypes', baseType);

      const params = parameterTypes.map(
        (it) => this[ownProps[KeyTypeRegistry.lookupIndex(this, it)]],
      );
      const facade = new type(...params);
      return facade.invoke(...args);
    };
  };
}

class KeyTypeRegistry {
  private static obj = {
    none: -1,
  };
  static lookupIndex(target: any, type: any): number {
    const targetName = target.constructor.name;
    const typeName = type.name;
    const key = `${targetName}#${typeName}`;
    return KeyTypeRegistry.obj[key];
  }

  static put(target: any, type: any, index: number) {
    const targetName = target.name;
    const typeName = type.name;
    const key = `${targetName}#${typeName}`;
    KeyTypeRegistry.obj[key] = index;
  }
}
