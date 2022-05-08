import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
	return (
		<div>
			<div className="Top-navbar">
				<div>
					<p className="Navbar-text">LIQUID</p>
				</div>
				<div>
					<a href="https://eth.liquidswap.trade/swap?outputCurrency=0x7fe8dac51394157811c71bbf74c133a224a9ff44" className="btn btn-primary Navbar-button">Launch App</a>
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
							There are so many moving pieces and new additions to the DeFi <br />
							and Crypto spaces everyday. The Liquid.Financial suite of DeFi tools <br /> 
							will help you stay ahead of the trend and grow your portfolio.
						</p>
					</div>

					<div className="Token-images">

					<iframe title= "Swap" scrolling="no" height="500" width="350" style={{width:"350px",height:"500px", border: "none", borderRadius: "19px", boxShadow: "rgba(0, 0, 0, 0.1) 3px 3px 10px 4px", display: "block", margin:"100"}} src="https://ethcustom.liquidswap.trade/swap?inputCurrency=ETH&outputCurrency=0x7fe8dac51394157811c71bbf74c133a224a9ff44&bg=1f1d2b&slippage=50&card=212129&dark=dark" />
						<img className="img2" src={require('../Images/token2.png')} alt="tokenimg2" />
						<img className="glare" src={require('../Images/NewBack.png')} alt="tokenimg2" />
					</div>

					<div className="launchbutton">
					<a href="https://eth.liquidswap.trade/swap?outputCurrency=0x7fe8dac51394157811c71bbf74c133a224a9ff44" className="btn btn-primary launchbtn2">Launch App</a>
					</div>
				</div>
			</div>

			<div id="Blocks" section="Blocks">
				<div className="blocks container d-flex justify-content-center">
					<div className="row">
						<div className="col-md-15 single">
							<div>
							<h2>LiquidSwap</h2>
							</div>
							<div>
							<p>LiquidSwap uses aggregated liquidity allowing traders to perform high speed transactions across multiple blockchains.</p>
							</div>
							<img src={require('../Images/data.png')} alt="1" />
						</div>
					</div>
				</div>

				<div className="blocks container d-flex justify-content-center">
					<div className="row">
						<div className="col-md-15 single">
							<div>
							<h2>LiquidCharts</h2>
							</div>
							<div>
							<p>An intuitive charting and token data system so DeFi traders can stay up to date on market trends. LiquidSwap integrated on each chart.</p>
							</div>
							<img src={require('../Images/stats.png')} alt="1" />
						</div>
					</div>
				</div>

				<div className="blocks container d-flex justify-content-center">
					<div className="row">
						<div className="col-md-15 single">
							<div>
							<h2>LiquidPortfolio</h2>
							</div>
							<div>
							<p>Track your complete DeFi portfolio in one place. wallet data such as current balances, transactions, historical data and more!</p>
							</div>
							<img src={require('../Images/wallet.png')} alt="1" />
						</div>
					</div>
				</div>

				<div className="d-flex justify-content-center mt-4 ">
				<a href="https://eth.liquidswap.trade/portfolio" className="tool-button">Tools</a>
				</div>
			</div>

			<div id="blockchain" section="Blockchains" className="pt-5">
				<div className="container border-gradient">
					<h1>Supported Blockchains</h1>
					<div className="container">
						<div className="row myicons">
							<div className="col-lg-2">
								<img src={require('../Images/eth.png')} alt="i1" />
							</div>
							<div className="col-lg-2 ">
								<img src={require('../Images/bsc.png')} alt="i2" />
							</div>
							<div className="col-lg-2">
								<img src={require('../Images/avalanche.png')} alt="i3" />
							</div>
							<div className="col-lg-2">
								<img src={require('../Images/polygon.png')} alt="i4" />
							</div>
							<div className="col-lg-2">
								<img src={require('../Images/ftm.png')} alt="i5" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="Partners" section="PARTNER">
				<div className="partners">
					<h2 className="heading">Liquid Partners</h2>

					<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
						<div className="carousel-inner">
							<div className="carousel-item active" data-bs-interval="4000">
								<div className="cards card1">
									<div className="row">
										<div className="col-md-6 sym">
											<a href="https://www.reimagined.fi/">
											<img src={require('../Images/p1.png')} alt="iconn1" />
											</a>
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
										<a href="https://www.exponentialcapital.finance/">
											<img src={require('../Images/p2.png')} alt="iconn1" />
											</a>
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
										<a href="https://midasdao.org/">
											<img src={require('../Images/p3.png')} alt="iconn1" />
											</a>
										</div>
										<div className="col-md-6">
											<h1>MidasDao</h1>
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
										<a href="https://d3protocol.io/">
											<img src={require('../Images/p4.png')} alt="iconn1" />
											</a>
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
										<a href="https://ccfdao.com/">
											<img src={require('../Images/p5.png')} alt="iconn1" />
											</a>
										</div>
										<div className="col-md-6">
											<h1>Cross Chain Farming</h1>
											<p>CCF - The first Farming as a Service protocol on the Binance Smart Chain.</p>
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
							<span className="arrow-left" aria-hidden="true">
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
					<div className="col-md-3 links">
						<ul>
							<Link to="/">
								<li>Twitter</li>
							</Link>
						</ul>
					</div> 
					<div className="col-md-3 second-links">
						<ul>
							<Link to="/">
								<li>Documentation</li>
							</Link>
						</ul>
					</div>
					<div className="col-md-3 links">
						<ul>
							<Link to="/">
								<li>Medium</li>
							</Link>
						</ul>
					</div> 
					<div className="col-md-3 links">
						<ul>
							<Link to="/">
								<li>Telegram</li>
							</Link>
						</ul>
					</div>  
				</div>
			</div>
		</div>
	)
}

export default Home
