import React from "react";
import { useForm } from "react-hook-form";

const Subscribe = () => {
    const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
		alert(JSON.stringify(data));
	};
    return (
        <>
            <section className="p-0 z-index-1">
                <div className="container">
                    <div className="row subscribe-inner align-items-center">
                        <div className="col-sm-6">
                            <h4>Subscribe Our Newsletter</h4>
                            <p className="lead mb-0">Get started for 1 Month free trial No Purchace required.</p>
                        </div>
                        <div className="col-sm-6">
                            <div className="subscribe-form sm-mt-2">
                                <form
                                    id="mc-form"
                                    className="group"
                                    onSubmit={handleSubmit(onSubmit)}
                                >
                                    <input
                                        type="email"
                                        value=""
                                        readOnly={true}
                                        name="EMAIL"
                                        className="email"
                                        id="mc-email"
                                        placeholder="Email Address"
                                        ref={register({
                                            required: "Required",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                            },
                                        })}
                                    />
                                    <input
                                        className="btn btn-theme"
                                        type="submit"
                                        name="subscribe"
                                        value="Subscribe"
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Subscribe;
