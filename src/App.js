import Card from "./component/Card";
import Footer from "./component/Footer";
import Heading from "./component/Heading";
import "./App.css";

function App() {
  return (
    <>
      <Heading />
      <div className="container-2">
        <p className="text-center">Latest Insights</p>
        <Card
          head="Life Insurance: Securing Your Future"
          title="investing | 5 minute read"
          para="Death is an inevitability, and while it’s a difficult topic to
                discuss, planning for the future is essential. Life insurance
                is an investment in the future, which can provide financial
                security for your loved ones in the event of your untimely
                demise."
        />
        <Card
          head="Mastering Your Finances:
                Expert Tips and Strategies to
                Achieve Your Financial Goals"
          title="investing | 5 minute read"
          img="card_img.png"
          para="Managing personal finances can be a daunting task, but
                with the right knowledge and strategies, anyone can
                create a roadmap to financial success. Whether you’re a
                seasoned investor or just starting to take control of your
                finances, this blog has something for everyone."
        />
        <Card
          head="Maximizing Your Savings with
                Post Office Monthly Income
                Scheme"
          title="investing | 5 minute read"
          para="If you’re looking for a safe and reliable investment option
                to generate a steady stream of monthly income, the Post
                Office Monthly Income Scheme (POMIS) is worth
                considering. Backed by the Government of India, this
                scheme offers attractive interest rates and guaranteed
                returns, making it a popular choice among conservative
                investors."
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
