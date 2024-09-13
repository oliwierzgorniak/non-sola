import { merriweather } from "@/fonts";
import sharedStyles from "../../../../app/pl/register/register.module.css";
import { useRegisterStore } from "../../../../stores/register";
import Buttons from "../buttons/Buttons";
import registerFetcher from "@/fetchers/registerFetcher";
import { useRouter } from "next/navigation";

export default function Password() {
  const error = useRegisterStore((state) => state.passwordError);
  const email = useRegisterStore((state) => state.email);
  const password = useRegisterStore((state) => state.password);
  const currentSection = useRegisterStore((state) => state.currentSection);
  const setEmail = useRegisterStore((state) => state.setEmail);
  const setPassword = useRegisterStore((state) => state.setPassword);
  const setPasswordError = useRegisterStore((state) => state.setPasswordError);
  const store = useRegisterStore();

  const router = useRouter();

  return (
    <div style={{ display: currentSection == 4 ? "initial" : "none" }}>
      <div className={sharedStyles.container}>
        <h2 className={merriweather.className}>Rejestracja</h2>
        <label htmlFor="email">
          Email
          <input
            id="email"
            type="email"
            value={email}
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </label>
        <label htmlFor="password">
          Hasło
          <input
            id="password"
            value={password}
            type="password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
        </label>
        {error && <span className={sharedStyles.error}>{error}</span>}
      </div>
      <Buttons
        section={4}
        handleButton={() => {
          if (password && email) {
            setPasswordError("");
            registerFetcher(store);
            router.push("/pl/search");
          } else {
            setPasswordError("Please fill all the fields");
          }
        }}
      />
    </div>
  );
}
