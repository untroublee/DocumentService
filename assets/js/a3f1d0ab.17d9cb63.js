"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[246],{67310:e=>{e.exports=JSON.parse('{"functions":[{"name":"new","desc":"Creates a new DocumentStore\\n\\n:::warning\\nThis should only be called once per server for each DataStore in a live game.\\nIf there are multiple instances of a DocumentStore for one key, any Documents\\nwill be treated as if they are from different sessions. This is useful for\\nunit testing but can lead to weird bugs in production.\\n:::","params":[{"name":"props","desc":"","lua_type":"DocumentStoreProps"}],"returns":[{"desc":"","lua_type":"DocumentStore<T>"}],"function_type":"static","source":{"line":69,"path":"src/DocumentStore.luau"}},{"name":"GetDocument","desc":"Gets the document for the key given, or creates one if it does not exist.","params":[{"name":"self","desc":"","lua_type":"DocumentStore<T>"},{"name":"key","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"Document<T>"}],"function_type":"static","source":{"line":104,"path":"src/DocumentStore.luau"}},{"name":"CloseAllDocuments","desc":"Closes all documents as fast as possible. This runs on BindToClose already.","params":[{"name":"self","desc":"","lua_type":"DocumentStore<T>"}],"returns":[],"function_type":"static","source":{"line":130,"path":"src/DocumentStore.luau"}},{"name":"isDocumentStore","desc":"Checks if a metatable passed is a DocumentStore.","params":[{"name":"instance","desc":"","lua_type":"metatable"}],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"static","source":{"line":158,"path":"src/DocumentStore.luau"}}],"properties":[],"types":[{"name":"DocumentStoreProps","desc":"","fields":[{"name":"dataStore","lua_type":"DataStore","desc":"The object returned by DataStoreService:GetDataStore()"},{"name":"check","lua_type":"(unknown) -> (boolean, T)","desc":"A type check function for your data, errors if types are invalid"},{"name":"default","lua_type":"T & {}","desc":"Default values, which are set if keys are empty"},{"name":"migrations","lua_type":"Migrations<T>","desc":"Migrations"},{"name":"sessionLock","lua_type":"boolean","desc":"Should the documents be session locked?"}],"source":{"line":55,"path":"src/DocumentStore.luau"}}],"name":"DocumentStore","desc":"Represents a collection of Documents, analagous to a DataStore.\\n\\n:::warning\\nMultiple DocumentStores can be created for the same DataStore. You should\\navoid this, as they will return different Document objects in different\\nsessions. If you need to access the same DocumentStore in multiple scripts,\\ncreate a module and require that module. Do not use DocumentService\\nwith Actors or Parallel Luau.\\n:::","source":{"line":27,"path":"src/DocumentStore.luau"}}')}}]);