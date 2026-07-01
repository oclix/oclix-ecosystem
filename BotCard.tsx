export default function BotCard() {
  return (
    <section className="max-w-3xl mx-auto py-12">
      <div className="border rounded-xl p-8">
        <h2 className="text-2xl font-bold">
          Active Trading Bot
        </h2>

        <p className="mt-4">
          Status: Running
        </p>

        <p className="mt-2">
          Strategy: EMA + RSI Momentum
        </p>

        <button className="mt-6 px-6 py-3 rounded-lg bg-cyan-600">
          Manage Bot
        </button>
      </div>
    </section>
  );
}
