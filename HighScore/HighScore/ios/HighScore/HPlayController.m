//
//  HPlayController.m
//  HighScore
//
//  Created by rogue on 2018/1/17.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "HPlayController.h"
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

@interface HPlayController ()

@end

@implementation HPlayController

- (void)viewDidLoad {
    [super viewDidLoad];
  
  self.view.backgroundColor = [UIColor whiteColor];
  
  UIButton *btn = [UIButton buttonWithType:UIButtonTypeCustom];
  [btn addTarget:self action:@selector(btnAction:) forControlEvents:UIControlEventTouchUpInside];
  [btn setTitle:@"Play game" forState:UIControlStateNormal];
  [btn setTitleColor:[UIColor orangeColor] forState:UIControlStateNormal];
  btn.frame = CGRectMake(20, 100, CGRectGetWidth([[UIScreen mainScreen] bounds]) - 40, 40);
  [self.view addSubview:btn];
  
  UIButton *high = [UIButton buttonWithType:UIButtonTypeCustom];
  [high addTarget:self action:@selector(highAction:) forControlEvents:UIControlEventTouchUpInside];
  [high setTitle:@"High Score" forState:UIControlStateNormal];
  [high setTitleColor:[UIColor orangeColor] forState:UIControlStateNormal];
  high.frame = CGRectMake(20, 160, CGRectGetWidth([[UIScreen mainScreen] bounds]) - 40, 40);
  [self.view addSubview:high];
  
}

- (void)btnAction:(UIButton *)sender {
  
  NSLog(@"dwadwaaw");
  
}

- (void)highAction:(UIButton *)sender {
  
  NSLog(@"High Score Button Pressed");
  NSURL *jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.bundle?platform=ios"];
  RCTRootView *rootView =
  [[RCTRootView alloc] initWithBundleURL : jsCodeLocation
                       moduleName        : @"HighScore"
                       initialProperties : @{@"scores" : @[@{@"name" : @"Alex", @"value": @"42"}, @{@"name" : @"Joel", @"value": @"10"}]} launchOptions: nil];
  UIViewController *vc = [[UIViewController alloc] init];
  vc.view = rootView;
  [self presentViewController:vc animated:YES completion:nil];
  
}


@end
