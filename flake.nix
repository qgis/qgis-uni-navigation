{
  description = "QGIS unified navigation bar web component";

  inputs = {
    # Stable channel: a bump to the next release is a deliberate project decision.
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-26.05";
    flake-parts = {
      url = "github:hercules-ci/flake-parts";
      inputs.nixpkgs-lib.follows = "nixpkgs";
    };
    systems.url = "github:nix-systems/default";
    devshell = {
      url = "github:numtide/devshell";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs =
    {
      nixpkgs,
      flake-parts,
      systems,
      devshell,
      ...
    }@inputs:
    flake-parts.lib.mkFlake { inherit inputs; } {
      systems = import systems;

      imports = [ devshell.flakeModule ];

      perSystem =
        { pkgs, ... }:
        let
          nodejs-slim = pkgs.nodejs-slim_24;
          pnpm = pkgs.pnpm_10_latest.override { inherit nodejs-slim; };
        in
        {
          devshells.default = {
            name = "qgis-uni-navigation";
            motd = ''
              {bold}{14}QGIS navigation bar dev shell{reset}
              Run {bold}menu{reset} to list the available commands.
            '';

            packages = [
              nodejs-slim
              pnpm
            ];

            devshell.startup.pnpm-install.text = "pnpm install --frozen-lockfile";

            commands = [
              # build
              {
                category = "build";
                name = "build";
                help = "Build the component into dist/ (pass --base=<url> for the deploy URL)";
                command = ''pnpm run build "$@"'';
              }

              # deploy
              {
                category = "deploy";
                name = "deploy";
                help = "Publish dist/ to the gh-pages branch";
                command = "pnpm run deploy";
              }

              # dev
              {
                category = "dev";
                name = "dev";
                help = "Start the Vite dev server on http://localhost:5173/";
                command = "pnpm run dev";
              }
              {
                category = "dev";
                name = "preview";
                help = "Serve the built dist/ folder locally";
                command = "pnpm run preview";
              }

              # maintenance
              {
                category = "maintenance";
                name = "update-flake";
                help = "Update the pinned flake inputs in flake.lock";
                command = "nix flake update";
              }
            ];
          };
        };
    };
}
