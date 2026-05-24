import "./IziRig.css";
import { izirigLinks, izirigNavItems, izirigNotice } from "./izirigData";

export default function IziRigPage() {
    return (
        <main className="izirig-wrapper">
            <section className="izirig-project-notice">
                <h1>{izirigNotice.title}</h1>
                <p>{izirigNotice.body}</p>

                <a className="izirig-back-button" href="/?openProject=izirig#experience">
                    ← Back to portfolio
                </a>
            </section>

            <div className="izirig-page">
                <nav className="izirig-navbar">
                    <a href="/" className="izirig-logo-link">
                        <img src="./src/pages/projects/izirig_suite/assets/icons/logo256.png" alt="IZI RIG logo" className="izirig-logo" />
                    </a>

                    <div className="izirig-navlinks">
                        {izirigNavItems.map((item) => (
                            <a key={item.href} href={item.href}>
                                {item.label}
                            </a>
                        ))}
                    </div>
                </nav>

                <section className="izirig-hero">
                    <div className="izirig-hero-content">
                        <h2>IZI RIG</h2>
                        <p>Giving life to characters</p>

                        <a className="izirig-button izirig-button-light" href={izirigLinks.gumroad}>
                            Get the tools
                        </a>
                    </div>
                </section>

                <section className="izirig-store-section">
                    <p className="izirig-label">GET THE TOOLS</p>
                    <h2>We are on flippednormals</h2>

                    <a className="izirig-button" href={izirigLinks.gumroad}>
                        Get the tools
                    </a>
                </section>

                <section id="about" className="izirig-content-section izirig-about">
                    <div className="izirig-text-block">
                        <p className="izirig-label">ABOUT</p>
                        <h2>What is Izi Rig?</h2>
                        <p>
                            IZI RIG is a script for Autodesk Maya to rig chatacters quickly, with minimal effort!
                        </p>

                        <a className="izirig-button" href={izirigLinks.gumroad}>
                            Get the tools
                        </a>
                    </div>

                    <div className="izirig-media-block">
                        <iframe
                            src="https://www.youtube.com/embed/2NHsVJJ88dk"
                            title="IZI RIG YouTube video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </section>

                <section id="gaming" className="izirig-content-section izirig-gaming">
                    <div className="izirig-media-block">
                        <img src="./src/pages/projects/izirig_suite/assets/images/game_ready.jpg" alt="Game Ready IZI RIG preview" />
                    </div>

                    <div className="izirig-text-block">
                        <p className="izirig-label">GAMING</p>
                        <h2>Compatible with game engines</h2>
                        <p>
                            We built a system to export FBX&apos;s in a better way.
                            <br />
                            With IZI RIG you can export a character animated or not to the game engine of your
                            liking as simply as importing an .FBX to, compatible with animations of Unreal and
                            Unity!
                        </p>

                        <a className="izirig-button" href={izirigLinks.gumroad}>
                            Get the tools
                        </a>
                    </div>
                </section>

                <section id="sculpting" className="izirig-content-section izirig-sculpting">
                    <div className="izirig-text-block">
                        <p className="izirig-label">SCULPTING</p>
                        <h2>Pose your characters in less than 1 minute</h2>
                        <p>IZI RIG is compatible with decimated models of up to 1 500 000 poligons!</p>
                        <p>
                            Posing quickly has never been so easy with 3 simple steps you character will be ready
                            to pose, importing to Zbrush, Blender or your preferred sculpting software.
                        </p>

                        <a className="izirig-button" href={izirigLinks.gumroad}>
                            Get the tools
                        </a>
                    </div>

                    <div className="izirig-media-block">
                        <img src="./src/pages/projects/izirig_suite/assets/images/quiker_pose.jpg" alt="Quiker Workflow IZI RIG preview" />
                    </div>
                </section>

                <section id="help" className="izirig-help-section">
                    <p className="izirig-label">HELP CENTER</p>
                    <h2>Links you might be insterested in</h2>

                    <div className="izirig-help-grid">
                        <div>
                            <h3>How to export my character to a game engine</h3>
                            <a className="izirig-button" href={izirigLinks.exportVideo}>
                                Watch the video
                            </a>
                        </div>

                        <div>
                            <h3>Learn how to re-target animations for mocap</h3>
                            <a className="izirig-button" href={izirigLinks.mainVideo}>
                                Watch the video
                            </a>
                        </div>

                        <div>
                            <h3>Test IZI RIG!</h3>
                            <a className="izirig-button" href={izirigLinks.gumroad}>
                                Get the tools
                            </a>
                        </div>
                    </div>
                </section>

                <section id="beta" className="izirig-beta-section">
                    <h2>We are on BETA!</h2>
                    <p>
                        Let us know that you are interested
                        <br />
                        in testing IZI RIG!
                    </p>

                    <form action={`mailto:${izirigLinks.contactEmail}`} method="post" encType="text/plain">
                        <label htmlFor="name">NAME</label>
                        <input id="name" name="name" type="text" />

                        <label htmlFor="email">EMAIL ADDRESS</label>
                        <input id="email" name="email" type="email" />

                        <button type="submit">Submit</button>
                    </form>
                </section>
            </div>

            <footer className="izirig-footer">
                <a className="izirig-back-button" href="/?openProject=izirig#experience">
                    ← Back to portfolio
                </a>
            </footer>

        </main>
    );
}