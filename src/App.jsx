import Layout from "./layout"
import home from "./pages/home"
export default function app(){
  return (
    <>
    <Layout content={home} />
    </>
  )
}