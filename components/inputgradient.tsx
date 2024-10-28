// import "./global.css";
import React, { useState } from "react";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { SafeAreaView } from "@/components/ui/safe-area-view";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
// import { LinearGradient } from "@/components/ui/linear-gradient";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Center } from "@/components/ui/center";
import { Mail } from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  const [colorMode, setColorMode] = useState<"dark" | "light">("light");
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <GluestackUIProvider mode={colorMode}>
        <Center className="rounded-xl bg-background-0 p-8 m-6 web:max-w-[400px]">
          <Heading size="xl">Stay up to date</Heading>
          <Text className="text-center leading-[22px] my-2">
            Subscribe to our newsletter for the latest news and product updates.
          </Text>

          <Input
            variant="outline"
            size="md"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
            className="w-full rounded-full my-3"
          >
            <InputField placeholder="abc@example.com" />
            <InputSlot className="pr-3">
              <InputIcon
                as={Mail}
                color={colorMode === "light" ? "#525252" : "#DBDBDC"}
              />
            </InputSlot>
          </Input>

          <LinearGradient
            className="w-full rounded-full items-center py-2"
            colors={["#8637CF", "#0F55A1"]}
            start={[0, 1]}
            end={[1, 0]}
          >
            <Text className="text-white font-semibold">Subscribe</Text>
          </LinearGradient>
        </Center>
      </GluestackUIProvider>
    </SafeAreaView>
  );
}