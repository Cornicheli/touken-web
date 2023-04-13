/**
 * Busca el objeto de información de contacto que representa el teléfono principal de un usuario en un array de objetos.
 * @param {object|array} infoContacto - El objeto o array de objetos de información de contacto.
 * @returns {object|null} El objeto de información de contacto que representa el teléfono principal o null si no se encuentra.
 */
function getTelefonoPrincipal(infoContacto) {
  // Verificar que el argumento sea un objeto o un array de objetos
  if (!infoContacto || (typeof infoContacto !== 'object' && !Array.isArray(infoContacto))) {
    return null
    throw new Error('El argumento debe ser un objeto o un array de objetos');
  }

  let telefonoPrincipal = null;

  // Buscar el objeto que representa el teléfono principal
  if (Array.isArray(infoContacto)) {
    infoContacto.forEach(elem => {
      telefonoPrincipal ||= elem.FlagPrincipal === 'Y' ? elem : null;
    });
  } else {
    telefonoPrincipal = infoContacto;
  }

  return telefonoPrincipal;
}

export { 
  getTelefonoPrincipal,
};
