import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import { styles } from "@/styles/_join";
import { GOOGLELOGO, FACEBOOKLOGO, HEROLOGOGREEN } from "@/constants";

export default function Signin() {
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.iconsection}>
          <Ionicons
            name="arrow-back"
            size={25}
            onPress={() => router.back()}
          />
          <Image source={HEROLOGOGREEN} />
        </View>

        <View style={styles.titleTextGroup}>
          <Text style={styles.titleText}>Sign in to your</Text>
          <Text style={styles.titleText}>Account</Text>
          <Text style={styles.subText}>
            Enter your email and password to sign in.
          </Text>
        </View>

        <View style={styles.formGroup}>
          <View>
            <Text style={styles.formLabel}>Email</Text>
            <TextInput style={styles.formControl} />
          </View>

          <View>
            <Text style={styles.formLabel}>Password</Text>
            <View style={styles.formPasswordControl}>
              <TextInput style={styles.passwordControl} secureTextEntry />
              <FontAwesome name="eye-slash" size={20} color="#7E7B7B" />
            </View>
          </View>

          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </View>

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>

        <View style={styles.dividerGroup}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.divider} />
        </View>

        <View style={styles.secondaryButtonGroup}>
          <TouchableOpacity style={styles.secondaryButton}>
            <Image source={GOOGLELOGO} />
            <Text style={styles.secondaryButtonText}>
              Continue with Google
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton}>
            <Image source={FACEBOOKLOGO} />
            <Text style={styles.secondaryButtonText}>
              Continue with Facebook
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.signupgroup}>
          <Text style={styles.signupTitleText}>Don’t have an account?</Text>
          <TouchableOpacity onPress={() => router.push("/join")}>
            <Text style={styles.signupSubTitleText}> Join</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
