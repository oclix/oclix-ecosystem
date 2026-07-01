use anchor_lang::prelude::*;

declare_id!("OCLIX11111111111111111111111111111111111");

#[program]
pub mod automation {
    use super::*;

    pub fn deploy_strategy(
        _ctx: Context<DeployStrategy>,
        strategy: String,
    ) -> Result<()> {
        msg!("Strategy deployed: {}", strategy);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct DeployStrategy<'info> {
    #[account(mut)]
    pub signer: Signer<'info>,
}
