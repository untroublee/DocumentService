"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[972],{24936:e=>{e.exports=JSON.parse('{"functions":[{"name":"new","desc":"Creates a new Document class\\n\\nDon\'t create more than one Document for the same key, they will be considered different sessions.","params":[{"name":"key","desc":"The datastore key","lua_type":"string"},{"name":"dataStore","desc":"The object returned by DataStoreService:GetDataStore()","lua_type":"DataStore"},{"name":"check","desc":"A type check function for your data, errors if types are invalid","lua_type":"(unknown) -> (boolean, T)"},{"name":"default","desc":"Default values, which are set if keys are empty","lua_type":"T"},{"name":"migrations","desc":"Fixes invalid data e.g. through migrations. Unfixable data should be reset.","lua_type":"Types.Migrations<T>\\n"}],"returns":[{"desc":"","lua_type":"Document<T>\\n"}],"function_type":"static","private":true,"source":{"line":112,"path":"src/Document.luau"}},{"name":"Peek","desc":"Reads the data of a potentially locked or unopened Document.\\n\\nDoes not update the cache.\\n\\nIf the data is not a table or not in the DocumentService format (see KeyData<T>),\\nthe data will be nil.","params":[{"name":"self","desc":"","lua_type":"Document<T>"}],"returns":[{"desc":"","lua_type":"Result<any>\\n"}],"function_type":"static","yields":true,"source":{"line":160,"path":"src/Document.luau"}},{"name":"Open","desc":"Validates the document if one exists, or creates a default document if no document exists.\\n\\nYou must call this method before reading or writing to a Document.\\n\\nCan fail for the following reasons: RobloxAPIFail or SessionLocked.\\n\\nThese should usually be handled by kicking the player.","params":[{"name":"self","desc":"","lua_type":"Document<T>"}],"returns":[{"desc":"","lua_type":"result"}],"function_type":"static","yields":true,"source":{"line":197,"path":"src/Document.luau"}},{"name":"Lock","desc":"Adds a session lock and enables auto-saves.\\n\\nThis is a separate method for DX, however unlocking is combined with saving to avoid hitting limits during server shutdowns.","params":[{"name":"self","desc":"","lua_type":"Document<T>"}],"returns":[{"desc":"","lua_type":"result"}],"function_type":"static","yields":true,"source":{"line":336,"path":"src/Document.luau"}},{"name":"Close","desc":"Destroys the document instance.\\n\\nIf session locked, will save the document and remove the lock first.","params":[{"name":"self","desc":"","lua_type":"Document<T>"}],"returns":[{"desc":"","lua_type":"result"}],"function_type":"static","yields":true,"source":{"line":404,"path":"src/Document.luau"}},{"name":"SetCache","desc":"Sets the cache.\\n\\nNote you must use immutable operations, i.e. clone any table you intend to edit","params":[{"name":"self","desc":"","lua_type":"Document<T>"},{"name":"newCache","desc":"","lua_type":"T"}],"returns":[{"desc":"","lua_type":"newCache"}],"function_type":"static","source":{"line":429,"path":"src/Document.luau"}},{"name":"GetCache","desc":"Retrieves the cache.\\n\\nNote you must use immutable operations, i.e. clone any table you intend to edit","params":[{"name":"self","desc":"","lua_type":"Document<T>"}],"returns":[{"desc":"","lua_type":"cache"}],"function_type":"static","source":{"line":445,"path":"src/Document.luau"}},{"name":"UpdateCache","desc":"Transforms the cache.\\n\\nNote you must use immutable operations, i.e. clone any table you intend to edit","params":[{"name":"self","desc":"","lua_type":"Document<T>"},{"name":"transform","desc":"","lua_type":"Transform<T>"}],"returns":[{"desc":"","lua_type":"cache"}],"function_type":"static","source":{"line":460,"path":"src/Document.luau"}},{"name":"Read","desc":"Reads from the DataStore.\\n\\n:::warning\\nOverrides the cache. If you are using session locking, you should only read once.\\n:::","params":[{"name":"self","desc":"","lua_type":"Document<T>"}],"returns":[{"desc":"result containing the data read","lua_type":"result"}],"function_type":"static","yields":true,"source":{"line":481,"path":"src/Document.luau"}},{"name":"Update","desc":"Performs an atomic transaction on the Document, writing to the DataStore.\\n\\nIf using session locking, transforms will build on cached data.","params":[{"name":"self","desc":"","lua_type":"Document<T>"},{"name":"transform","desc":"Transform function for the transaction.","lua_type":"Transform<T>"},{"name":"shouldUnlock","desc":"Should this update also remove the session lock? This reduces budget usage by combining updates and unlocks.","lua_type":"boolean?"}],"returns":[{"desc":"Result containing the new data.","lua_type":"result"}],"function_type":"static","yields":true,"source":{"line":519,"path":"src/Document.luau"}},{"name":"Save","desc":"Saves a Document\'s cache to its DataStore. Equivalent to calling Update without transforming the data.\\n\\nFor session-locked data only.","params":[{"name":"self","desc":"","lua_type":"Document<T>"}],"returns":[],"function_type":"static","yields":true,"source":{"line":645,"path":"src/Document.luau"}},{"name":"SaveAndUnlock","desc":"Saves a Document\'s cache to its DataStore and removes the session lock.\\n\\nFor session-locked data only.","params":[{"name":"self","desc":"","lua_type":"Document<T>"}],"returns":[],"function_type":"static","yields":true,"source":{"line":661,"path":"src/Document.luau"}},{"name":"Erase","desc":"Wipes all data associated with the key and closes the document\\n\\nSatisfies compliance with GDPR right of erasure.","params":[{"name":"self","desc":"","lua_type":"Document<T>"}],"returns":[],"function_type":"static","yields":true,"source":{"line":677,"path":"src/Document.luau"}},{"name":"IsLockedByUs","desc":"Returns whether we hold a session lock on the document and can access caching methods","params":[{"name":"self","desc":"","lua_type":"Document<T>"}],"returns":[{"desc":"","lua_type":"boolean\\n"}],"function_type":"static","source":{"line":690,"path":"src/Document.luau"}},{"name":"HookBefore","desc":"Attaches a hook which occurs before the event.\\n\\nNote that if a hook yields, it will yield all methods that call it. Hooks are called in the order\\nthey are added.\\n\\nExplicitly annotate the transform type with DocumentService.Transform to avoid luau typechecking limitations.","params":[{"name":"self","desc":"","lua_type":"Document<T>"},{"name":"event","desc":"the operation to call the hook before","lua_type":"PreHookEvent"},{"name":"hook","desc":"a hook function that receives the arguments passed in to the operation","lua_type":"((Transform<T>) -> Transform<T>) | (() -> ())\\n"}],"returns":[],"function_type":"static","source":{"line":705,"path":"src/Document.luau"}},{"name":"HookAfter","desc":"Attaches a hook which occurs after the event, before the method returns.\\n\\nNote that if a hook yields, it will yield all methods that call it. Hooks are called in the order\\nthey are added.","params":[{"name":"self","desc":"","lua_type":"Document<T>"},{"name":"event","desc":"the operation to call the hook after","lua_type":"PostHookEvent"},{"name":"hook","desc":"a hook function that receives the arguments passed in to the operation","lua_type":"(Result<T>) -> Result<T>"}],"returns":[],"function_type":"static","source":{"line":722,"path":"src/Document.luau"}},{"name":"__tostring","desc":"For debug printing documents","params":[{"name":"self","desc":"","lua_type":"Document<T>"}],"returns":[],"function_type":"static","source":{"line":729,"path":"src/Document.luau"}},{"name":"isDocument","desc":"Checks whether a metatable passed is a Document","params":[{"name":"instance","desc":"","lua_type":"metatable"}],"returns":[{"desc":"is it a Document","lua_type":"isDocument"}],"function_type":"static","source":{"line":739,"path":"src/Document.luau"}}],"properties":[],"types":[],"name":"Document","desc":"An abstraction over key, value pairs in a DataStore.","source":{"line":15,"path":"src/Document.luau"}}')}}]);