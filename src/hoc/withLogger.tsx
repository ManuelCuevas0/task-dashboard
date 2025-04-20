import React, { useEffect } from "react";

function withLogger<P extends object>(WrappedComponent: React.ComponentType<P>) {
  const ComponentWithLogger: React.FC<P> = (props) => {
    useEffect(() => {
      console.log(`🪵 Componente montado: ${WrappedComponent.name}`, props);
      return () => {
        console.log(`🧹 Componente desmontado: ${WrappedComponent.name}`);
      };
    }, []);

    return <WrappedComponent {...props} />;
  };

  ComponentWithLogger.displayName = `WithLogger(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;

  return ComponentWithLogger;
}

export default withLogger;
