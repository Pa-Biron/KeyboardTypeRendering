import { useState } from "react";
import { Button, KeyboardTypeOptions, TextInput, View } from "react-native";

export default function Index() {
  const [text, setText] = useState("");
  const [keyboardType, setKeyboardType] =
    useState<KeyboardTypeOptions>("default");

  const handleChangeKeyboardType = () => {
    setKeyboardType(keyboardType === "default" ? "numeric" : "default");
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextInput
        placeholder="Add text."
        value={text}
        onChangeText={setText}
        keyboardType={keyboardType}
      />

      <Button title="Change keyboard type" onPress={handleChangeKeyboardType} />
    </View>
  );
}
