import { useEffect, useRef, useState } from "react";
import { Text, View } from "react-native";
import { Accelerometer } from "expo-sensors";
import styles from "../styles"
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { FACES } from "../constants/faces";

const LIMITE_AGITACAO = 2.0; 
const PAUSA_PARA_SORTEAR = 1000; 
const TROCA_FACE_MS = 80; 

type Estado = "parado" | "rolando" | "resultado";

const sortear = () => Math.floor(Math.random() * 20) + 1;

export default function Dado() {
  const [estado, setEstado] = useState<Estado>("parado");
  const [resultado, setResultado] = useState(20);
  const [numeroRolando, setNumeroRolando] = useState(20);

  const timerPausa = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rotacao = useSharedValue(0);
  const escala = useSharedValue(1);

  useEffect(() => {
    Accelerometer.setUpdateInterval(50);

    const subscription = Accelerometer.addListener(({ x, y, z }) => {
      const magnitude = Math.sqrt(x * x + y * y + z * z);

      if (magnitude > LIMITE_AGITACAO) {
        setEstado("rolando");

        if (timerPausa.current) clearTimeout(timerPausa.current);
        timerPausa.current = setTimeout(() => {
          setResultado(sortear());
          setEstado("resultado");
        }, PAUSA_PARA_SORTEAR);
      }
    });

    return () => {
      subscription.remove();
      if (timerPausa.current) clearTimeout(timerPausa.current);
    };
  }, []);

  useEffect(() => {
    if (estado !== "rolando") return;

    rotacao.set(0);
    rotacao.set(
      withRepeat(withTiming(360, { duration: 500, easing: Easing.linear }), -1)
    );

    const intervalo = setInterval(
      () => setNumeroRolando(sortear()),
      TROCA_FACE_MS
    );

    return () => {
      clearInterval(intervalo);

      const alvo = Math.ceil(rotacao.get() / 360) * 360;
      rotacao.set(
        withTiming(alvo, { duration: 300, easing: Easing.out(Easing.cubic) })
      );
      escala.set(withSequence(withTiming(1.15, { duration: 120 }), withSpring(1)));
    };
  }, [estado, rotacao, escala]);

  const estiloDado = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotacao.get()}deg` }, { scale: escala.get() }],
  }));

  const numeroMostrado = estado === "rolando" ? numeroRolando : resultado;

  return (
    <View style={[styles.container, estado === "rolando" && styles.rolando]}>
      <Animated.Image
        source={FACES[numeroMostrado]}
        style={[styles.dado, estiloDado]}
        resizeMode="contain"
      />

      <Text style={styles.texto}>
        {estado === "parado" && "Agite o celular!"}
        {estado === "rolando" && "Rolando..."}
        {estado === "resultado" && `Você tirou: ${resultado}`}
      </Text>
    </View>
  );
}