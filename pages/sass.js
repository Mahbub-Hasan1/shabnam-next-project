import Image from 'next/image'

const sass = () => {
    return (
        <div>
            <h5>mahbub skdjflks</h5>

            <div className="all_card">
                <div className="my_card">
                    <img src="/tilt.jpg"
                        alt=""
                        width={330}
                        height={220}
                    />
                    <h5>product name</h5>
                </div>

                <div className="my_card">
                    <img src="/tilt.jpg"
                        alt=""
                        width={330}
                        height={220}
                    />
                    <h5>product name</h5>
                </div>

                <div className="my_card">
                    <Image src="/tilt.jpg"
                        alt=""
                        width={330}
                        height={220}
                    />
                    <h5>product name</h5>
                </div>

                <div className="my_card">
                    <Image src="/tilt.jpg"
                        alt=""
                        width={330}
                        height={220}
                    />
                    <h5>product name</h5>
                </div>

            </div>
        </div>
    );
};

export default sass;