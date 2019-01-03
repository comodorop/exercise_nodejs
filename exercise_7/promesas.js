/*
TODO: Promises mini excercise

Tenemos 3 funciones que retornan promesas:
getUserProfileId(): Promise<number> (retorna user profileId)
getUserNoteIds(profileId: number): Promise<number[]> (retorna un arreglo de noteIds)
getNoteContent(noteId: number): Promise<string> (rretorna el contenido de una nota)

¿Cómo obtendrias el contenido de todas las notas que le pertenecen a un usuario?
Imprime el resultado de las notas

Algo como esto:

>> [ 'Note 2', 'Note 23', 'Note 65', 'Note 43', 'Note 28' ]
*/
function getUserProfileId() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(12), 500);
  });
}

function getUserNoteIds(profileId) {
  return new Promise((resolve, reject) => {
    if (profileId == null) return reject(new Error("Missing profileId"));
    setTimeout(() => resolve([2, 23, 65, 43, 28]), 500);
  });
}

function getNoteContent(noteId) {
  const notes = [
    { id: 2, content: "Note 2" },
    { id: 23, content: "Note 23" },
    { id: 65, content: "Note 65" },
    { id: 43, content: "Note 43" },
    { id: 28, content: "Note 28" }
  ];
  return new Promise((resolve, reject) => {
    if (noteId == null) return reject(new Error("Missing noteId"));
    setTimeout(() => resolve(notes.find((n) => n.id === noteId).content, 500));
  });
}