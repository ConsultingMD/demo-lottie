import Header from '../components/header'
import ErrorAnimation from './../public/lottie/404.json'
import EmailAnimation from './../public/lottie/email-successfully-sent.json'
import FileUploadAnimation from './../public/lottie/file_upload.json'
import MentalWellbeingAnimation from './../public/lottie/mental-wellbeing.json'
import SuccessAnimation from './../public/lottie/success.json'
import { Player } from '@lottiefiles/react-lottie-player'
import Link from "next/link";

export default function MoreLottie() {

  return (
    <div className="container">
		<Header />
      <main>
        <h1 className="title">
         More Lottie
        </h1><br />
          <Link href="/">
              Back home
          </Link><br />

        {/* Lottie Player */}
          <h3>Email Sent Animation</h3>
        <Player
          autoplay
          loop
          src={EmailAnimation}>
        </Player>
          <br />

          <h3>File Upload Animation</h3>
          <Player
              autoplay
              loop
              src={FileUploadAnimation}>
          </Player>
          <br />

          <h3>Success Animation</h3>
          <Player
              autoplay
              loop
              src={SuccessAnimation}>
          </Player>
          <br />

        <h3>Mental Health</h3>
        <Player
            autoplay
            loop
            src={MentalWellbeingAnimation}>
        </Player>
        <br />

        <h3>404 error</h3>
        <Player
            autoplay
            loop
            src={ErrorAnimation}>
        </Player>
        <br />

      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
