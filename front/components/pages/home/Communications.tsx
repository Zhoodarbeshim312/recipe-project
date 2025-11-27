const Communications = () => {
  return (
    <section className="py-[40px] bg-[#8D71465E]">
      <div className="container">
        <div className="flex flex-col items-center gap-[20px]">
          <h1 className="text-center text-[48px] text-[#380202]">
            Давайте оставаться на связи!
          </h1>
          <p className="text-center text-[30px] text-[#3802029C]">
            Подпишитесь на нашу рассылку, чтобы мы могли сообщать <br /> вам
            наши новости и предложения
          </p>
          <div className="flex items-center gap-[20px]">
            <input
              style={{
                border: "2px solid #714424",
              }}
              className="bg-[white] rounded-[10px] w-[600px] h-[55px] px-[20px] text-[20px]"
              type="text"
              placeholder="Напиши Cвой Email"
            />
            <button className="w-[215px] h-[55px] rounded-[10px] text-[white] bg-[#714424]">
              Подписаться
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Communications;
