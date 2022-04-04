import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
	return (
		<div>
			<div className="Top-navbar">
				<div>
					<p className="Navbar-text">LIQUID.FINANCIAL</p>
				</div>
				<div>
					<button className="btn btn-primary Navbar-button">Test App</button>
				</div>
			</div>

			<div className="Site-header">
				<div className="Site-header-text">
					<h1>All in one DeFi Platform</h1>
					<h2>Changing Decentralized Finance</h2>
				</div>
				<div className="Front-images">
					<div className="front-para">
						<p>
							{' '}
							There are so many moving pieces and new additions to the DeFi and Crypto <br />
							spaces everyday. The Liquid.Financial suite of DeFi tools will help you stay <br />
							ahead of the trend and grow your portfolio.
						</p>
					</div>

					<div className="Token-images">
						<img className="img1" src={require('../Images/token1.png')} alt="tokenimg1" />
						<img className="img2" src={require('../Images/token2.png')} alt="tokenimg2" />
						<img className="glare" src={require('../Images/blue-flare.png')} alt="tokenimg2" />
					</div>

					<div className="launchbutton">
						<button className="btn btn-primary launchbtn2">Launch App</button>
					</div>
				</div>
			</div>

			<div id="Blocks" section="Blocks">
				<div className="blocks container d-flex justify-content-center">
					<div className="row">
						<div className="col-md-4 single">
							<div>
								<img src={require('../Images/1.png')} alt="1" />
							</div>
							<h2>LiquidSwap</h2>
							<p>Using aggregated liquidity traders can perform fast paced swaps across multiple blockchains</p>
						</div>
						<div className="col-md-4 single">
							<div>
								<img src={require('../Images/2.png')} alt="2" />
							</div>
							<h2>LiquidFrame</h2>
							<p>an easy to use DEX configurator so any project can add the LiquidFrame DEX to their dashboard.</p>
						</div>
						<div className="col-md-4 single">
							<div>
								<img src={require('../Images/3.png')} alt="3" />
							</div>
							<h2>LiquidCharts</h2>
							<p>Using aggregated liquidity traders can perform fast paced swaps across multiple blockchains</p>
						</div>
					</div>
				</div>

				<div className="blocks container d-flex justify-content-center  ">
					<div className="row">
						<div className="col-md-4 single liquidswap">
							<div>
								<img src={require('../Images/1.png')} alt="1" />
							</div>
							<h2>LiquidSwap</h2>
							<p>Using aggregated liquidity traders can perform fast paced swaps across multiple blockchains</p>
						</div>
						<div className="col-md-4 single">
							<div>
								<img src={require('../Images/2.png')} alt="2" />
							</div>
							<h2>LiquidFrame</h2>
							<p>an easy to use DEX configurator so any project can add the LiquidFrame DEX to their dashboard.</p>
						</div>
						<div className="col-md-4 single">
							<div>
								<img src={require('../Images/3.png')} alt="3" />
							</div>
							<h2>LiquidCharts</h2>
							<p>Using aggregated liquidity traders can perform fast paced swaps across multiple blockchains</p>
						</div>
					</div>
				</div>

				<div className="d-flex justify-content-center mt-4 ">
					<button className="tool-button">Tools</button>
				</div>
			</div>

			<div id="blockchain" section="Blockchains" className="pt-5">
				<div className="container border-gradient">
					<h1>Supported Blockchains</h1>
					<div className="container">
						<div className="row myicons">
							<div className="col-lg-2">
								<img src={require('../Images/icon1.png')} alt="i1" />
							</div>
							<div className="col-lg-2 ">
								<img src={require('../Images/icon2.png')} alt="i2" />
							</div>
							<div className="col-lg-2">
								<img src={require('../Images/icon3.png')} alt="i3" />
							</div>
							<div className="col-lg-2">
								<img src={require('../Images/icon4.png')} alt="i4" />
							</div>
							<div className="col-lg-2">
								<img src={require('../Images/icon5.png')} alt="i5" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="roadmap" section="roadmap">
				<h1>Q2 2022 Roadmap</h1>

				<div className="timeline">
					<div className="roadmap right">
						<i className="icon"></i>
						<div className="content">Liquid.Financial Launch</div>
					</div>
					<div className="roadmap left">
						<i className="icon"></i>
						<div className="content">Liquidportfolio Update</div>
					</div>
					<div className="roadmap right">
						<i className="icon"></i>
						<div className="content">LiquidCharts Launch</div>
					</div>

					<div className="roadmap left">
						<i className="icon"></i>
						<div className="content">$LQD Holder Rewards</div>
					</div>
					<div className="roadmap right">
						<i className="icon"></i>
						<div className="content">Additional Tools</div>
					</div>
				</div>
			</div>

			<div id="Partners" section="PARTNER">
				<div className="partners">
					<h2 className="heading">Liquid.Financial Partners</h2>

					<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
						<div className="carousel-inner">
							<div className="carousel-item active" data-bs-interval="4000">
								<div className="cards card1">
									<div className="row">
										<div className="col-md-6 sym">
											<img src={require('../Images/p1.png')} alt="iconn1" />
										</div>
										<div className="col-md-6">
											<h1>reimagined.fi</h1>
											<p>$REFI is DeFi reimagined. Simply hold $REFI and receive yield farming profits back in ETH.</p>
										</div>
									</div>
								</div>
							</div>
							<div className="carousel-item" data-bs-interval="4000">
								<div className="cards card2">
									<div className="row">
										<div className="col-md-6 sym">
											<img src={require('../Images/p2.png')} alt="iconn1" />
										</div>
										<div className="col-md-6">
											<h1>Exponential Capital</h1>
											<p> $EXPO is a farm-trade-seed-as-a-service run by the community for the community. </p>
										</div>
									</div>
								</div>
							</div>
							<div className="carousel-item" data-bs-interval="4000">
								<div className="cards card3">
									<div className="row">
										<div className="col-md-6 sym">
											<img src={require('../Images/p3.png')} alt="iconn1" />
										</div>
										<div className="col-md-6">
											<h1>MidadDao</h1>
											<p>
												Automated treasury growth protocol with a steady flow of revenues from Yield farming, Metaverse and P2E that rewards
												$CROWN investors and $THRONE node holders.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="carousel-item " data-bs-interval="4000">
								<div className="cards card4">
									<div className="row">
										<div className="col-md-6 sym">
											<img src={require('../Images/p4.png')} alt="iconn1" />
										</div>
										<div className="col-md-6">
											<h1>D3Protocol</h1>
											<p>$DeFi 3.0 Staking-as-a-Service and index. Stake. Mint. Earn.</p>
										</div>
									</div>
								</div>
							</div>
							<div className="carousel-item" data-bs-interval="4000">
								<div className="cards card5">
									<div className="row">
										<div className="col-md-6 sym">
											<img src={require('../Images/p5.png')} alt="iconn1" />
										</div>
										<div className="col-md-6">
											<h1>Cross Chain Farming</h1>
											<p>$CCF :: First Farming As a Service on Binance Smart Chain</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
							<span className="arrow-left" aria-hidden="true">
								<i className="fa-solid fa-arrow-left"></i>
							</span>
							<span className="visually-hidden"></span>
						</button>
						<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
							<span className="arrow-right" aria-hidden="true">
								<i className="fa-solid fa-arrow-right"></i>
							</span>
							<span className="visually-hidden"></span>
						</button>
					</div>
				</div>
			</div>

			<div className="footer" section="footer">
				<hr />

				<div className="row">
					<div className="col-md-4 links">
						<ul>
							<Link to="/">
								<li>Pages</li>
							</Link>
							<Link to="/">
								<li>Home</li>
							</Link>
							<Link to="/">
								<li>Tools</li>
							</Link>
							<Link to="/">
								<li>Documentation</li>
							</Link>
							<Link to="/">
								<li>Contracts</li>
							</Link>
						</ul>
					</div>
					<div className="col-md-4 logo">
						<img src={require('../Images/footer-logo.png')} alt="footerimg" />
					</div>
					<div className="col-md-4 second-links">
						<ul>
							<Link to="/">
								<li>Links</li>
							</Link>
							<Link to="/">
								<li>twitter</li>
							</Link>
							<Link to="/">
								<li>Medium</li>
							</Link>
							<Link to="/">
								<li>Telegram</li>
							</Link>
							<Link to="/">
								<li>Discord</li>
							</Link>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
