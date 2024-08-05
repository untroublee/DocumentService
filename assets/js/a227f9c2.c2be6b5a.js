"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[972],{24936:e=>{e.exports=JSON.parse('{"functions":[{"name":"new","desc":"Creates a new Document class\\n\\nDon\'t create more than one Document for the same key, they will be considered different sessions.","params":[{"name":"key","desc":"The datastore key","lua_type":"string"},{"name":"dataStore","desc":"The object returned by DataStoreService:GetDataStore()","lua_type":"DataStore"},{"name":"check","desc":"A type check function for your data, errors if types are invalid","lua_type":"(unknown) -> (boolean, T)"},{"name":"default","desc":"Default values, which are set if keys are empty","lua_type":"T"},{"name":"migrations","desc":"Fixes invalid data e.g. through migrations. Unfixable data should be reset.","lua_type":"Types.Migrations<T>\\n"}],"returns":[{"desc":"","lua_type":"Document<T>\\n"}],"function_type":"static","private":true,"source":{"line":138,"path":"src/Document.luau"}},{"name":"Peek","desc":"Reads the data of a potentially locked or unopened Document.\\n\\nDoes not update the cache.\\n\\nIf the data is not a table or not in the DocumentService format (see KeyData<T>),\\nthe data will be nil.","params":[{"name":"self","desc":"","lua_type":"Document<T>"}],"returns":[{"desc":"","lua_type":"Result<any>\\n"}],"function_type":"static","yields":true,"source":{"line":187,"path":"src/Document.luau"}},{"name":"Open","desc":"Validates the document if one exists, or creates a default document if no\\ndocument exists.\\n\\nIf shouldLock is true, Open will session lock the document. While this does\\nviolate the single responsibility principle, it is far more efficient and\\nsafer to do multiple things within one UpdateAsync!\\n\\nYou must call this method before reading or writing to a Document.\\n\\nCan fail for the following reasons: RobloxAPIFail, NotBackwardsCompatible,\\nFailedCheck.\\n\\nNotBackwardsCompatible indicates the data has been migrated to a version on\\na newer server that isn\'t compatible with this server\'s latest version.\\n\\nFailedCheck indicates the migrations failed to convert the data to a form\\nthat passes the check function and matches the expected type interface.\\n\\nThese should usually be handled by kicking the player.","params":[{"name":"self","desc":"","lua_type":"Document<T>"},{"name":"shouldLock","desc":"","lua_type":"boolean?"}],"returns":[{"desc":"","lua_type":"result"}],"function_type":"static","yields":true,"source":{"line":237,"path":"src/Document.luau"}},{"name":"Close","desc":"Destroys the document instance.\\n\\nIf session locked, will save the document and remove the lock first.\\n\\nNote that after closing a Document, you will need to call \\nDocumentStore:GetDocument() to retrieve a new one if you wish to access the\\nDocument again.","params":[{"name":"self","desc":"","lua_type":"Document<T>"}],"returns":[{"desc":"","lua_type":"result"}],"function_type":"static","yields":true,"source":{"line":387,"path":"src/Document.luau"}},{"name":"SetCache","desc":"Sets the cache.\\n\\nNote you must use immutable operations, i.e. clone any table you intend to edit","params":[{"name":"self","desc":"","lua_type":"Document<T>"},{"name":"newCache","desc":"","lua_type":"T"}],"returns":[{"desc":"","lua_type":"newCache"}],"function_type":"static","source":{"line":416,"path":"src/Document.luau"}},{"name":"GetCache","desc":"Retrieves the cache.\\n\\nNote you must use immutable operations, i.e. clone any table you intend to edit","params":[{"name":"self","desc":"","lua_type":"Document<T>"}],"returns":[{"desc":"","lua_type":"cache"}],"function_type":"static","source":{"line":432,"path":"src/Document.luau"}},{"name":"UpdateCache","desc":"Transforms the cache.\\n\\nNote you must use immutable operations, i.e. clone any table you intend to edit","params":[{"name":"self","desc":"","lua_type":"Document<T>"},{"name":"transform","desc":"","lua_type":"Transform<T>"}],"returns":[{"desc":"","lua_type":"cache"}],"function_type":"static","source":{"line":447,"path":"src/Document.luau"}},{"name":"Read","desc":"Reads from the DataStore.\\n\\n:::warning\\nOverwrites the cache. If you are using session locking, you should only read once.\\n:::","params":[{"name":"self","desc":"","lua_type":"Document<T>"}],"returns":[{"desc":"result containing the data read","lua_type":"result"}],"function_type":"static","yields":true,"source":{"line":468,"path":"src/Document.luau"}},{"name":"Update","desc":"Performs an atomic transaction on the Document, writing to the DataStore.\\n\\nIf using session locking, transforms will build on cached data.","params":[{"name":"self","desc":"","lua_type":"Document<T>"},{"name":"transform","desc":"Transform function for the transaction.","lua_type":"Transform<T>"}],"returns":[{"desc":"Result containing the new data.","lua_type":"result"}],"function_type":"static","yields":true,"source":{"line":505,"path":"src/Document.luau"}},{"name":"Save","desc":"Saves a Document\'s cache to its DataStore. Equivalent to calling Update\\nwithout transforming the data.\\n\\nFor session-locked data only.","params":[{"name":"self","desc":"","lua_type":"Document<T>"}],"returns":[],"function_type":"static","yields":true,"source":{"line":624,"path":"src/Document.luau"}},{"name":"Erase","desc":"Wipes all data associated with the key and closes the document\\n\\nSatisfies compliance with GDPR right of erasure.","params":[{"name":"self","desc":"","lua_type":"Document<T>"}],"returns":[],"function_type":"static","yields":true,"source":{"line":640,"path":"src/Document.luau"}},{"name":"IsLockedByUs","desc":"Returns whether we hold a session lock on the document and can access caching methods","params":[{"name":"self","desc":"","lua_type":"Document<T>"}],"returns":[{"desc":"","lua_type":"boolean\\n"}],"function_type":"static","source":{"line":648,"path":"src/Document.luau"}},{"name":"HookBefore","desc":"Attaches a hook which occurs before the event.\\n\\nNote that if a hook yields, it will yield all methods that call it. Hooks\\nare called in the order they are added.\\n\\nExplicitly annotate the transform type with DocumentService.Transform to\\navoid luau typechecking limitations.","params":[{"name":"self","desc":"","lua_type":"Document<T>"},{"name":"event","desc":"the operation to call the hook before","lua_type":"PreHookEvent"},{"name":"hook","desc":"a hook function that receives the arguments passed in to the operation","lua_type":"((Transform<T>) -> Transform<T>) | (() -> ())\\n"}],"returns":[],"function_type":"static","source":{"line":664,"path":"src/Document.luau"}},{"name":"HookAfter","desc":"Attaches a hook which occurs after the event, before the method returns.\\n\\nNote that if a hook yields, it will yield all methods that call it. Hooks\\nare called in the order they are added.","params":[{"name":"self","desc":"","lua_type":"Document<T>"},{"name":"event","desc":"the operation to call the hook after","lua_type":"PostHookEvent"},{"name":"hook","desc":"a hook function that receives the arguments passed in to the operation","lua_type":"(Result<T>) -> Result<T>"}],"returns":[],"function_type":"static","source":{"line":681,"path":"src/Document.luau"}},{"name":"__tostring","desc":"For debug printing documents","params":[{"name":"self","desc":"","lua_type":"Document<T>"}],"returns":[],"function_type":"static","source":{"line":688,"path":"src/Document.luau"}},{"name":"isDocument","desc":"Checks whether a metatable passed is a Document","params":[{"name":"instance","desc":"","lua_type":"metatable"}],"returns":[{"desc":"is it a Document","lua_type":"isDocument"}],"function_type":"static","source":{"line":698,"path":"src/Document.luau"}}],"properties":[],"types":[],"name":"Document","desc":"An abstraction over key, value pairs in a DataStore.","source":{"line":15,"path":"src/Document.luau"}}')}}]);