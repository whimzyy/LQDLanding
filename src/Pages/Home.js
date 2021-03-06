import React from 'react'

const Home = () => {
	return (
		<div>
			<div className="Top-navbar">
				<div class="logo-image">
					<img src={require('../Images/Logov2.png')} alt="1" />
				</div>
				<div>
					<a href="https://eth.liquidswap.trade/swap?outputCurrency=0x7fe8dac51394157811c71bbf74c133a224a9ff44" className="btn btn-primary Navbar-button">Launch App</a>
				</div>
			</div>

			<div className="Site-header">
				<div className="Site-header-text">
				<div className="Front-images">
					<h1>All in one DeFi Platform</h1>
					<h2>Changing Decentralized Finance</h2>
				
					<div className="front-para">
						<p>
							The DeFi and Crypto space is continuously changing.<br /> 
							With so many moving pieces and new additions.<br /> The<mark className='grad'>LIQUID</mark> 
							Suite is here to help you stay ahead of the <br /> curve
							all while managing your own personal portfolio.
						</p>
					</div>
					<div className="launchbutton">
					<a href="https://eth.liquidswap.trade/swap?outputCurrency=0x7fe8dac51394157811c71bbf74c133a224a9ff44" className="btn btn-primary launchbtn2">Launch App</a>
					</div>
					<div align="center"> <iframe title= "Swap" scrolling="no" height="500" width="350" style={{width:"350px",height:"500px", border: "none", borderRadius: "19px", boxShadow: "rgba(0, 0, 0, 0.1) 3px 3px 10px 4px", marginBottom:"100px", marginTop:"-75px",  display: "block", margin:"100"}} src="https://ethcustom.liquidswap.trade/swap?inputCurrency=ETH&outputCurrency=0x7fe8dac51394157811c71bbf74c133a224a9ff44&bg=1f1d2b&slippage=50&card=212129&dark=dark" /> </div>
					</div>
				</div>
			</div>

			<div id="Blocks" section="Blocks">
				<div className="blocks container d-flex justify-content-center">
					<div className="row">
						<div className="col-md-15 single">
							<div>
							<h2><mark className='grad'>LiquidSwap</mark></h2>
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
							<h2><mark className='grad'>LiquidCharts</mark></h2>
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
							<h2><mark className='grad'>LiquidPortfolio</mark></h2>
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

			<div id="Blocks" section="Blocks">
				<div className="blocks container d-flex justify-content-center">
					<div className="row">
						<div className="col-md-15 single">
							<div>
							<h2><mark className='grad'>LiquidStake</mark></h2>
							</div>
							<div>
							<p>$LQD and select tokens will be able to be earned by providing liquidity to pools on LiquidStake. Aggregated liquidity pools from all of DeFi. </p>
							</div>
							<img src={require('../Images/LiquidStake.png')} alt="1" />
						</div>
					</div>
				</div>

				<div className="blocks container d-flex justify-content-center">
					<div className="row">
						<div className="col-md-15 single">
							<div>
							<h2><mark className='grad'>LiquidCheck</mark></h2>
							</div>
							<div>
							<p>Verify that the token you are wanting to purchase does not have anything  suspicious in the token smart contract.</p>
							</div>
							<img src={require('../Images/LiquidCheck.png')} alt="1" />
						</div>
					</div>
				</div>

				<div className="blocks container d-flex justify-content-center">
					<div className="row">
						<div className="col-md-15 single">
							<div>
							<h2><mark className='grad'>LiquidFrame</mark></h2>
							</div>
							<div>
							<p>An easy to use DEX configurator with auto-generated code so any project can add the LiquidFrame DEX to their dashboard.  </p>
							</div>
							<img src={require('../Images/clock 1.png')} alt="1" />
						</div>
					</div>
				</div>

				<div className="d-flex justify-content-center mt-4 ">
				<a href="https://eth.liquidswap.trade/portfolio" className="tool-button2">Tools</a>
				</div>
			</div>

			<div className="footer" section="footer">
				<hr />

				<div className="row">
					<div className="col-md-3 links">
						<ul>
							<a href="https://twitter.com/LiquidSwapDeFi" >Twitter</a>
						</ul>
					</div> 
					<div className="col-md-3 second-links">
						<ul>
							<a href="https://liquidswap.gitbook.io/liquid.financial" >Documentation</a>
						</ul>
					</div>
					<div className="col-md-3 links">
						<ul>
							<a href="https://medium.com/@LiquidSwapDeFi" >Medium</a>
						</ul>
					</div> 
					<div className="col-md-3 links">
						<ul>
							<a href="https://t.me/liquidswapdefi" >Telegram</a>
						</ul>
					</div>  
				</div>
			</div>
		</div>
	)
}

export default Home
