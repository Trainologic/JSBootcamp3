#include <node.h>
namespace demo {
using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::Object;
using v8::String;
using v8::Value;

void SayHello(const FunctionCallbackInfo<Value>& args) {
    Isolate* isolate = args.GetIsolate();
    args.GetReturnValue().Set(String::NewFromUtf8(isolate, "Hello world"));
}

void SellCrack(const FunctionCallbackInfo<Value>& args) {
    Isolate* isolate = args.GetIsolate();

    args.GetReturnValue().Set(String::NewFromUtf8(isolate, "Kahjit has the crack if you have the coin"));
}

void init(Local<Object> exports) {
    NODE_SET_METHOD(exports, "sayHello", SayHello);
    NODE_SET_METHOD(exports, "sellCrack", SellCrack);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, init)
}  // namespace demo
