import "./firstModal.css"
export default function FirstModal({startGame}) {
  return (
    <div>
        <div className="backdrop">
            <div className="modal">
                <h2>بازی هفت خان رستم</h2>
                <h3>قوانین مسابقه</h3>
                <ul>
                    <li>اولین اشتباه شما آخرین اشتباه شماست</li>
                    <li>فرصت هر سوال 30 ثانیه می باشد</li>
                    <li>در هر مرحله میتوانید انصراف دهید</li>
                </ul>
                <button onClick={startGame}>شروع بازی</button>
            </div>
        </div>
    </div>
  )
}
