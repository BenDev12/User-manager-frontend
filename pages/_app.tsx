import '../styles/globals.css'
import {AppProps} from 'next/app'
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
} from "@fortawesome/free-brands-svg-icons";
import {
  faUser
} from "@fortawesome/free-solid-svg-icons";

library.add(
  fab,
  faUser
  
 
);

function MyApp({ Component, pageProps }:AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
